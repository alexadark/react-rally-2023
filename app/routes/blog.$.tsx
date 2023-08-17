import {
  useStoryblokState,
  StoryblokComponent,
  getStoryblokApi,
} from "@storyblok/react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ params }: LoaderArgs) => {
  const slug = params["*"] ?? "home";
  const sbApi = getStoryblokApi();
  const { data } = await sbApi.get(`cdn/stories/blog/${slug}`, {
    version: "draft",
  });
  const { data: posts } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "blog/",
    is_startpage: 0,
  });
  return json({ story: data?.story, posts: posts?.stories });
};

const BlogRoute = () => {
  const data = useLoaderData();
  const story = useStoryblokState(data.story);
  return <StoryblokComponent blok={story?.content} />;
};

export default BlogRoute;
