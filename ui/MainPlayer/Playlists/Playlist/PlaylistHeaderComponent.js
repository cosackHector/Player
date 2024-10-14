import { createElement } from "../../../../shared/createElement.js";
import { PlaylistHeaderDescription } from "./PlaylistHeaderDescription.js";


export function PlaylistHeaderComponent(titleText, imgUrl, arrayTracks) {
  const headerElement = createElement("header", ["playlist_header"]);
  const containerElement = createElement("div", ["header_container"]);
  const imageElement = createElement("img", ["header_img"], { src: imgUrl });
  const titleElement = PlaylistHeaderDescription(titleText, arrayTracks);
  

  headerElement.append(containerElement);
  containerElement.append(imageElement, titleElement);

  return headerElement;
}
;
