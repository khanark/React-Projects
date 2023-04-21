/// <reference types="vite/client" />

export interface User {
  gender: "female" | "male";
  name: {
    title: string;
    first: string;
    last: string;
  };
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
