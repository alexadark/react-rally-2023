import { json, redirect } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import type { V2_MetaFunction } from "@remix-run/node";
import type {
  ActionArgs,
  ActionFunction,
  LoaderArgs,
  LoaderFunction,
} from "@remix-run/node";

import Page from "./components/Page";

import Layout from "./components/Layout";
import Post from "./components/Post";
import AllPosts from "./components/AllPosts";
import PageContent from "./components/PageContent";
import tailwind from "./styles/tailwind.css";
const isServer = typeof window === "undefined";

//We need to check if we are on the server or client to get the correct env variable
const accessToken = isServer
  ? process.env.STORYBLOK_PREVIEW_TOKEN
  : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    window.env.STORYBLOK_PREVIEW_TOKEN;

const components = {
  page: Page,
  post: Post,
  "all-posts": AllPosts,
  "page-content": PageContent,
};
storyblokInit({
  accessToken,
  use: [apiPlugin],
  components,
});

export const loader: LoaderFunction = async (args: LoaderArgs) => {
  return json({
    env: {
      STORYBLOK_PREVIEW_TOKEN: process.env.STORYBLOK_PREVIEW_TOKEN,
    },
  });
};

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const body = await request.formData();
  return redirect(`/search-results?query=${body.get("query")}`);
};

export const meta: V2_MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "My Super New Blog | Remix" },
    {
      property: "og:title",
      content: "Very cool blog",
    },
    {
      name: "description",
      content: "This blog is the best",
    },
    { viewport: "width=device-width,initial-scale=1" },
  ];
};

export default function App() {
  const { env } = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const links = () => {
  return [{ rel: "stylesheet", href: tailwind }];
};
