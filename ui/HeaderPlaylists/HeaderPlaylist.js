import { addPlaylist } from "../../data/data.js";
import { createElement } from "../../shared/createElement.js"

export const HeaderPlaylist = () => {
    const element = createElement('header', ['header_playlists']);
    const titleElement = createElement('span', ['playlists_header_title'], {}, 'Мой плейлисты')
    const btnElement = createElement('button', ['header_btnAddPlaylist'], {}, 'Add playlist');
    btnElement.addEventListener('click', addPlaylist);

    element.append(titleElement, btnElement);
    return element;
};