import { createElement } from "../../../../../shared/createElement.js";
import { TrackComponent } from "./Track/TrackComponent.js";

export function TracksComponent(inputTracks) {
  const tracksContainerElement = createElement("section", [
    "tracks_container",
  ]);
  inputTracks.forEach((track) => {
    tracksContainerElement.append(TrackComponent(track));
  });
  return tracksContainerElement;
}
;
