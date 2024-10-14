import { createElement } from "../../../shared/createElement.js";
import { getTopsArtist } from "../../../shared/getTopsArtist.js";

export const PlaylistHeaderDescription = (titleText, arrayTracks) => {
    const element = createElement('div', ['container_headerPlaylist_description']);
    const titleElement = createElement("h2", ["playlist_header__title"]);
    const topArtist = getTopsArtist(arrayTracks);
    const othersText = createElement('span', ['others_text'], {}, 'and others')
    const others = document.querySelector('.others_text');
    const text = `${topArtist} and others`;
    const topArtistText = createElement('p', ['header_description__top'], {}, text);

    element.append(titleElement, topArtistText);
    titleElement.textContent = titleText;
    return element;
};