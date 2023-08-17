import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import type { PageStoryblok } from "~/types";

const Page = ({ blok }: PageStoryblok) => (
  <main {...storyblokEditable(blok)} key={blok._uid}>
    {blok.body.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
