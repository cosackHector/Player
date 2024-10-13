import { deletePlaylist } from "../../../data/data.js";
import { createElement } from "../../../shared/createElement.js";

export function createDeletePlaylistButton(id) {
    const containerDeleteBtn = createElement('div', ['container_deleteBtn']);
    const deleteBtn = createElement('button', ['deletePlaylist_btn'], {}, 'Удалить плейлист');
    containerDeleteBtn.append(deleteBtn);
    deleteBtn.addEventListener('click', () => {
        deletePlaylist(id)
    });
    return containerDeleteBtn;
};