import { deleteTrack } from "../../../../../data/data.js";
import { createElement } from "../../../shared/createElement.js";

export function createDeleteTrackButton(id) {
    const element = createElement('div', ['container_deleteBtn']);
    const btmElement = createElement('button', ['deletePlaylist_btn'], {}, 'Удалить');
    element.append(btmElement);
    btmElement.addEventListener('click', () => {
        deleteTrack(id)
    });
    return element;
};