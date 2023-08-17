import { storyblokEditable } from "@storyblok/react";
import { useLoaderData, Link } from "@remix-run/react";
import type { AllPostsStoryblok, PostStoryblok } from "~/types";

const AllPosts = ({ blok }: AllPostsStoryblok) => {
  const { posts } = useLoaderData();

  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <h1 className="mb-10 text-4xl font-bold text-center text-teal-500 uppercase">
        {blok.headline}
      </h1>
      <div className="container grid-cols-3 gap-5 px-6 mx-auto lg:grid">
        {posts?.map((p: PostStoryblok) => {
          const post = p.content;
          return (
            <article key={post._uid}>
              <Link to={`/${p.full_slug}`}>
                <h2 className="mb-5 text-xl font-bold text-center uppercase hover:text-teal-500">
                  {post.headline}
                </h2>
                <div className="flex justify-center mb-10">
                  <img src={`${post.image?.filename}/m/400x200`} alt="" />
                </div>
              </Link>
              <p>{post.teaser}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default AllPosts;
