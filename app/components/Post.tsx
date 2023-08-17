import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import type { PostStoryblok } from "~/types";

const Post = ({ blok }: PostStoryblok) => {
  const { headline, text, _uid, image } = blok;
  return (
    <article
      {...storyblokEditable(blok)}
      key={_uid}
      className="max-w-2xl px-5 mx-auto"
    >
      <h1 className="mb-10 text-4xl font-bold text-center text-teal-500 uppercase ">
        {headline}
      </h1>
      <img
        className="mb-10 shadow-xl rounded-xl"
        src={`${image.filename}/m/600x300`}
        alt=""
      />
      <div className="prose">{render(text)}</div>
    </article>
  );
};

export default Post;
