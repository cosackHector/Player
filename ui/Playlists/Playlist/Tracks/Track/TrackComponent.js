import { createElement } from "../../../../../shared/createElement.js";

export function TrackComponent(inputTrack) {
  const container = createElement("div", ["track"]);
  const element = createElement('div', ['container_title_track']);
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
  element.append(trackTitle, trackAudio)
  container.append(trackImg, element);

  return container;
}
;
