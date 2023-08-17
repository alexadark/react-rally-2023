import {StoryblokStory} from 'storyblok-generate-ts'

export interface AllPostsStoryblok {
  headline?: string;
  _uid: string;
  component: "all-posts";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface PageContentStoryblok {
  text?: RichtextStoryblok;
  _uid: string;
  component: "page-content";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface PostStoryblok {
  headline?: string;
  image?: AssetStoryblok;
  text?: RichtextStoryblok;
  _uid: string;
  component: "post";
  [k: string]: any;
}
