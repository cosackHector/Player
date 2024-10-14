import { createElement } from "../../../shared/createElement.js";
import { PlaylistComponent } from "./Playlist/PlaylistComponent.js";


export function PlaylistsComponent(inputPlaylists) {
  // проверка на наличие массива плейлистов
  if (!Array.isArray(inputPlaylists) || inputPlaylists.length === 0) {
    const error = 'Playlists id not iterable';
    console.error(error);
    return error;
  };
  // выбыраем основной контейнер для добаления плейлистов
const element = createElement('div', ['container_playlists']);
  // обходим циклом все плейлисты и получаем каждый плейлист на каждом тике
  inputPlaylists.forEach((playlist) => {
    // добавляем плейлист
    element.append(PlaylistComponent(playlist) )
  });
  return element;
};
