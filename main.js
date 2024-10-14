import { editModeState, playlists, subscribe } from "./data/data.js";
import { AddEditPlaylistComponent } from "./ui/AddEditPlaylist/AddEditPlaylistComponent.js";
import { HeaderComponent } from "./ui/HeaderPlayer/HeaderComponent.js";
import { MainComponent } from "./ui/MainPlayer/MainComponent.js";

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
    HeaderComponent(logoUrl, titlePlayer),
    MainComponent(playlists),
    editModeState.isOpen && AddEditPlaylistComponent()
  );
};




