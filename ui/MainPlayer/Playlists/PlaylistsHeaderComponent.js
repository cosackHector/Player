import { createElement } from "../../../shared/createElement";

export const PlaylistHeaderComponent = () => {
    const element = createElement('header', ['header_playlists'], {}, 'Мои плейлисты');
    return element;
};