import { createElement } from "../../../../shared/createElement.js";

export const AudioComponent = (trackUrl) => {
  const element = createElement('audio', ['footer_audio'], {src: trackUrl, controls: true});
  return element;
};