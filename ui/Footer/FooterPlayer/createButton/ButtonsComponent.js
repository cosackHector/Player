import { createElement } from "../../../../shared/createElement.js";
import { createFooterPlayerButton } from "../createButton/createFooterPlayerButton.js";

export const ButtonsComponent = () => {
    const element = createElement('div', ['footer_player_buttons']);
    const playButtonElement = createFooterPlayerButton('play', 'play');
    const pauseButtonElement = createFooterPlayerButton('pause', 'pause');
    setTimeout(()=> {
        const audio = document.querySelector('.footer_audio');

    playButtonElement.addEventListener('click', () => {
        audio.play();
    });
    pauseButtonElement.addEventListener('click', () => {
        audio.pause();
    });
        return audio
    }, 0)
    element.append(
        playButtonElement,
        pauseButtonElement
    );
    return element;
};