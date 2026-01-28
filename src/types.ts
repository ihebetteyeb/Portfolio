export interface liveDemo {
  type: "live";
  url: string;
}
export interface ImageDemo {
  type: "carousel";
  images: string[];
}
type Demo = liveDemo | ImageDemo;

export interface ProjectDetails {
  thumbnail: string;
  title: string;
  techs: string[];
  description: string;
  demo?: Demo;
  githubUrl?: string;
}
