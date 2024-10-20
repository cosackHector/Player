import { editModeState, playlists, subscribe } from "./data/data.js";
import { AddEditPlaylistComponent } from "./ui/AddEditPlaylist/AddEditPlaylistComponent.js";
import { FooterComponent } from "./ui/Footer/FooterComponent.js";
import { HeaderPlayerComponent } from "./ui/Header/HeaderPlayerComponent.js";
import { MainPlayerComponent } from "./ui/Main/MainPlayerComponent.js";

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
    FooterComponent(),
    AddEditPlaylistComponent()
  );
};