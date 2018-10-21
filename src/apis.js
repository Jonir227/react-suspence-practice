import axios from "axios";
import key from "./key";
import { createResource } from "react-cache";

export const albumSearchResult = createResource(albumName =>
  axios.get("http://ws.audioscrobbler.com/2.0/", {
    params: {
      method: "album.search",
      api_key: key.api_key,
      album: albumName,
      format: "json"
    }
  })
);
