import { createElement } from "../../../../../shared/createElement.js";

export function TrackComponent(inputTrack) {
  const element = createElement("div", ["track"]);
  const containerTitleElement = createElement('div', ['container_title_track']);
  const trackImg = createElement("img", ["track_img"], {
    src: inputTrack.trackImageUrl,
    width: '50px', height: '50px'
  });
  const trackTitle = createElement(
    "p",
    ["track_title"],
    {},
    `${inputTrack.artistName} - ${inputTrack.title}`
  );
  const trackAudio = createElement("audio", ["track_audio"], {
    src: inputTrack.fileUrl,
    controls: true,
  });

  containerTitleElement.append(trackTitle, trackAudio)
  element.append(trackImg, containerTitleElement);

  return element;
};
