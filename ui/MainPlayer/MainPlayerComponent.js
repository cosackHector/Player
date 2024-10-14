import { createElement } from "../../shared/createElement.js";
import { HeaderPlaylist } from "./HeaderPlaylists/HeaderPlaylist.js";
import { PlaylistsComponent } from "./Playlists/PlaylistsComponent.js";

export function MainPlayerComponent(inputPlaylists) {
  const element = createElement("main", ["main"]);
  element.append(HeaderPlaylist(), PlaylistsComponent(inputPlaylists))
  return element;
};
