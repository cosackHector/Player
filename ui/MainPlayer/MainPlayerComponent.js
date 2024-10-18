import { createElement } from "../../shared/createElement.js";
import { HeaderPlaylists } from "./Playlists/HeaderPlaylists/HeaderPlaylists.js";
import { PlaylistsComponent } from "./Playlists/PlaylistsComponent.js";

export function MainPlayerComponent(inputPlaylists) {
  const element = createElement("main", ["main"]);
  element.append(HeaderPlaylists(), PlaylistsComponent(inputPlaylists))
  return element;
};
