import { createElement } from "../../../shared/createElement.js";
import { PlaylistHeaderComponent } from "./PlaylistHeaderComponent.js";
import { createDeletePlaylistButton } from "./createDeletePlaylistButton.js";
import { TracksComponent } from "./Tracks/TracksComponent.js";


export function PlaylistComponent(inputPlaylist) {
  const element = createElement("div", ["playlist"]);
  element.append(
    createDeletePlaylistButton(inputPlaylist.id),
    PlaylistHeaderComponent(inputPlaylist.title, inputPlaylist.coverImageUrl, inputPlaylist.tracks),
    TracksComponent(inputPlaylist.tracks));
  return element;
};