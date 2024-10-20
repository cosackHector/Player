import { createElement } from "../../shared/createElement.js";
import { FooterPlayer } from "./FooterPlayer/FooterPlayerComponent.js";

export function FooterComponent() {
  const element = createElement("footer", ["footer_container"]);
  element.append(FooterPlayer())
    return element;
};