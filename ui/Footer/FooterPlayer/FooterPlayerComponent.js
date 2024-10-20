import { syncSrcPlayer } from "../../../data/data.js";
import { createElement } from "../../../shared/createElement.js";
import { AudioComponent } from "./createAudio/AudioFooterComponent.js";
import { ButtonsComponent } from "./createButton/ButtonsComponent.js";
import { VolumeComponent } from "./createInput/VolumeComponent.js";

export const FooterPlayer = () => {
  const element = createElement('div', ['footer_player']);
  element.append(
    AudioComponent(syncSrcPlayer.src),)
    // ButtonsComponent(),
    // VolumeComponent());
  return element;
};
  
