import { addPlaylist, closedAddEditMode } from "../../data/data.js";
import { createElement } from "../../shared/createElement.js";

export function editModeButtonsElement () {
    // создание контейнера для кнопок
    const element = createElement('div', ['container_addEditModeBtn']);
    // создание кнопок
    const cancelPlaylistButtonElement = createElement('button', ['cancelEditModeBtn'], {}, 'Отмена');
    const addPlaylistButtonElement = createElement('button', ['addEditModeBtn'], {}, 'Добавить');
    // обработка событий
    addPlaylistButtonElement.addEventListener('click', addPlaylist);
    cancelPlaylistButtonElement.addEventListener('click', closedAddEditMode);
    // добавление в дерево
        element.append(cancelPlaylistButtonElement, addPlaylistButtonElement)
    return element;
};