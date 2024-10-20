import { createElement } from "../../shared/createElement.js";
import { HeaderPlaylistsComponent } from "./Playlists/HeaderPlaylistsComponent.js";
import { PlaylistsComponent } from "./Playlists/PlaylistsComponent.js";

export function MainPlayerComponent(inputPlaylists) {
  const element = createElement("main", ["main"]);
  element.append(HeaderPlaylistsComponent(), PlaylistsComponent(inputPlaylists))
  return element;
};
