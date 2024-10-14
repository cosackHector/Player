import { deletePlaylist } from "../../../../data/data.js";
import { createElement } from "../../../../shared/createElement.js";

export function createDeletePlaylistButton(id) {
    const element = createElement('div', ['container_deleteBtn']);
    const btnElement = createElement('button', ['deletePlaylist_btn'], {}, 'Удалить плейлист');
    element.append(btnElement);
    btnElement.addEventListener('click', () => {
        deletePlaylist(id)
    });
    return element;
};