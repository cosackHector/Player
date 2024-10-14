import { createElement } from "../../shared/createElement.js";

export function HeaderPlayerComponent(logoUrl, headerText) {
  const element = createElement("header", ["app_header"]);
  const imageElement = createElement("img", ["header_logo"], { src: logoUrl });
  const titleElement = createElement("span", ["header_title"]);
  titleElement.textContent = headerText;

  element.append(imageElement, titleElement);
  return element;
};
