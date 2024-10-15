import { deActivateEditMode, createUpdatePlaylist, editModeState } from "../../data/data.js";
import { createElement } from "../../shared/createElement.js";

export function editModeButtonsElement () {
    // создание контейнера для кнопок
    const element = createElement('div', ['container_addEditModeBtn']);
    // создание кнопок
    const cancelPlaylistButtonElement = createElement('button', ['cancelEditModeBtn'], {}, 'Отмена');
    const addPlaylistButtonElement = createElement('button', ['addEditModeBtn'], {}, editModeState.btnText);
    // добавление затемнения кнопки в случае если нет заголовка
    if(!editModeState.newPlaylistTitle) {
        addPlaylistButtonElement.disabled = true;
    };
    // обработка событий
    addPlaylistButtonElement.addEventListener('click', createUpdatePlaylist);
    cancelPlaylistButtonElement.addEventListener('click', deActivateEditMode);
    // добавление в дерево
        element.append(cancelPlaylistButtonElement, addPlaylistButtonElement)
    return element;
};