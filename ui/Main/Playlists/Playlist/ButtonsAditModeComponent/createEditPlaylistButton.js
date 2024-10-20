import { activateEditMode } from "../../../../../data/data.js";
import { createElement } from "../../../../../shared/createElement.js";

export function createEditPlaylistButton(id) {
    const element = createElement('button', ['editPlaylist_btn'], {}, 'Редактировать');
    element.addEventListener('click', () => {
        activateEditMode(id)
    });
    return element;
};