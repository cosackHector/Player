import { createElement } from "../../../../../shared/createElement.js";
import { createDeletePlaylistButton } from "./createDeletePlaylistButton.js";
import { createEditPlaylistButton } from "./createEditPlaylistButton.js";

export function ButtonsComponent(id) {
    const element = createElement('div', ['container_headerPlaylist_buttons']);
    element.append(
        createDeletePlaylistButton(id),
        createEditPlaylistButton(id));
    return element;
};