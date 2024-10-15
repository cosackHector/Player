import { createElement } from "../../../../shared/createElement.js";
import { PlaylistHeaderComponent } from "./PlaylistHeader/PlaylistHeaderComponent.js";
import { TracksComponent } from "./Tracks/TracksComponent.js";
import { ButtonsComponent } from "./ButtonsAditModeComponent/ButtonsComponent.js";


export function PlaylistComponent(inputPlaylist) {
  const element = createElement("div", ["playlist"]);
  element.append(
    ButtonsComponent(inputPlaylist.id),
    PlaylistHeaderComponent(inputPlaylist.title, inputPlaylist.coverImageUrl, inputPlaylist.tracks),
    TracksComponent(inputPlaylist.tracks));
  return element;
};