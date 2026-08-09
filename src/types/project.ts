export interface FestivalRecognition {
  category: string;
  title: string;
}

export interface Festival {
  festival: string;
  year: number;
  recognitions: FestivalRecognition[];
}

export interface Project {
  slug: string;

  title: string;
  year: number;

  type: string;
  genre: string;
  competition: string;

  role: string;
  description: string;

  director: string;
  dop: string;
  production: string;

  camera: string;
  lenses: string;

  duration: string;
  location: string;
  status: string;

  hero: string;

  gallery: {
    image: string;
    size: "full" | "left" | "right";
  }[];

  behindTheScenes: {
    image: string;
  }[];

  festivals: Festival[];

  awards: string[];

  video: string;

  links: {
    imdb: string;
    trailer: string;
    instagram: string;
  };
}