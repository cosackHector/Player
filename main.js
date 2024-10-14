import { editModeState, playlists, subscribe } from "./data/data.js";
import { AddEditPlaylistComponent } from "./ui/AddEditPlaylist/AddEditPlaylistComponent.js";
import { FooterPlayerComponent } from "./ui/FooterPlayer/FooterPlayerComponent.js";
import { HeaderPlayerComponent } from "./ui/HeaderPlayer/HeaderPlayerComponent.js";
import { MainPlayerComponent } from "./ui/MainPlayer/MainPlayerComponent.js";

const App = document.querySelector("#root");
const logoUrl = "./assets/icons/logotype.png";
const titlePlayer = "My Player";

subscribe(refresh);
refresh();

export function refresh() {
  // обнуляем дерево
  App.innerHTML = ''
  // добавление элементов в дерево
  App.append(
    HeaderPlayerComponent(logoUrl, titlePlayer),
    MainPlayerComponent(playlists),
    FooterPlayerComponent(),
    editModeState.isOpen && AddEditPlaylistComponent()
  );
};