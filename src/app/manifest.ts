import { MetadataRoute } from "next";

function manifest(): MetadataRoute.Manifest {
  return {
    name: "Júlio Martins",
    short_name: "Júlio Martins",
    description: "Fullstack Developer, based in Brazil.",
    start_url: "/",
  };
}

export default manifest;
