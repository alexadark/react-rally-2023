import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import type { PageContentStoryblok } from "~/types";

const Content = ({ blok }: PageContentStoryblok) => {
  const { _uid, text } = blok;
  return (
    <div {...storyblokEditable(blok)} key={_uid} className="max-w-full prose">
      {render(text)}
    </div>
  );
};

export default Content;
