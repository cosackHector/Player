import { addPlaylist } from "../../data/data.js";
import { createElement } from "../../shared/createElement.js";

export function editModeButtonsElement () {
    const element = createElement('div', ['container_addEditModeBtn']);
    const addPlaylistButtonElement = createElement('button', ['addEditModeBtn'], {}, 'Добавить');
        addPlaylistButtonElement.addEventListener('click', addPlaylist);
        
    const cancelPlaylistButtonElement = createElement('button', ['cancelEditModeBtn'], {}, 'Отмена');
        element.append(cancelPlaylistButtonElement, addPlaylistButtonElement)
    return element;
};