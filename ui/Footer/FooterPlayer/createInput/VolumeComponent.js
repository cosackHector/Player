import { createElement } from "../../../../shared/createElement.js";

export const VolumeComponent = () => {
  const element = createElement('input', ['footer_player_volume'], {
    type: "range",
    id: "volume",
    min: "0",
    max: "1",
    step: "0.1", 
    value:"1"
  });
  setTimeout(()=> {
    const audio = document.querySelector('.footer_audio');
    element.addEventListener('input', (event) => {
      audio.volume = event.target.value;
    });
    return audio
}, 0)

  return element;
};