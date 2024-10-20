import { activateEditMode } from "../../../data/data.js";
import { createElement } from "../../../shared/createElement.js"

export const HeaderPlaylistsComponent = () => {
    const element = createElement('header', ['header_playlists']);
    const titleElement = createElement('div', ['playlists_title'], {}, 'Мои плейлисты')
    const btnElement = createElement('button', ['addPlaylistBtn'], {}, 'Add playlist');
    btnElement.addEventListener('click', () => activateEditMode());

    element.append(titleElement, btnElement);
    return element;
};