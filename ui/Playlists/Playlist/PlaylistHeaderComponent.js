import { createElement } from "../../../shared/createElement.js";

export function PlaylistHeaderComponent(titleText, imgUrl) {
  const headerElement = createElement("header", ["playlist_header"]);
  const containerElement = createElement("div", ["header_container"]);
  const titleElement = createElement("h2", ["playlist_header__text"]);
  const imageElement = createElement("img", ["header_img"], { src: imgUrl });
  titleElement.textContent = titleText;

  headerElement.append(containerElement);
  containerElement.append(imageElement, titleElement);

  return headerElement;
}
;
