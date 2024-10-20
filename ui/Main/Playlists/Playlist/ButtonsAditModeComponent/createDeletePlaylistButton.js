import { deletePlaylist } from "../../../../../data/data.js";
import { createElement } from "../../../../../shared/createElement.js";

export function createDeletePlaylistButton(id) {
    const element = createElement('button', ['deletePlaylist_btn'], {}, 'Удалить');
    element.addEventListener('click', () => {
        deletePlaylist(id)
    });
    return element;
};