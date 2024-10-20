// пример данных
export let  playlists = [
  {
    id: 1,
    title: "Hip-Hop Hits",
    coverImageUrl: "./assets/images/playlistImg.jpg",
    tracks: [
      {
        id: 1,
        trackImageUrl: "./assets/images/trackImg.jpg",
        title: "Rap God",
        artistName: "Руки вверх",
        fileUrl: "./music/Sergey_Jukov/Некрасивая.mp3",
        isHot: false,
      },
      {
        id: 2,
        trackImageUrl: "./assets/images/track2Img.jpg",
        title: "In da club",
        artistName: "Руки вверх",
        fileUrl: "./music/InDaClub.mp3",
        isHot: true,
      },
      {
        id: 1,
        trackImageUrl: "./assets/images/trackImg.jpg",
        title: "Rap God",
        artistName: "Руки вверх",
        fileUrl: "./music/RapGod.mp3",
        isHot: false,
      },
      {
        id: 2,
        trackImageUrl: "./assets/images/track2Img.jpg",
        title: "In da club",
        artistName: "Руки вверх",
        fileUrl: "./music/InDaClub.mp3",
        isHot: true,
      },
      {
        id: 1,
        trackImageUrl: "./assets/images/trackImg.jpg",
        title: "Rap God",
        artistName: "Руки вверх",
        fileUrl: "./music/RapGod.mp3",
        isHot: false,
      },
      {
        id: 2,
        trackImageUrl: "./assets/images/track2Img.jpg",
        title: "In da club",
        artistName: "Руки вверх",
        fileUrl: "./music/InDaClub.mp3",
        isHot: true,
      },
    ],
  },
];
// данные режима редактирования
export const editModeState = {
  newPlaylistTitle: '',
  isOpen: false,
  id: null,
};
// данные для синхронизации плееров
export const syncSrcPlayer = {
  src: './music/RapGod.mp3'
};

// ПЕРЕМЕННЫЕ
// массив с подписчиками  // observers / subscribers / listeners / handlers
const observers = []; 



// ФУНКЦИИ
// удаление / добавление / редактирование плейлистов
export const deletePlaylist = (id) => {
  playlists = playlists.filter((pl) => pl.id !== id );
  emit()
};
export const createUpdatePlaylist = () => {
  // режим редактирования плейлиста
  if(editModeState.id) {
    const playlist = playlists.find((p) => p.id == editModeState.id);
    playlist.title = editModeState.newPlaylistTitle;
    editModeState.isOpen = !editModeState.isOpen;
    editModeState.newPlaylistTitle = '';
  } 
  // режим добавления плейлиста
  else {
    playlists.push({
      id: Date.now(),
      title: editModeState.newPlaylistTitle,
      coverImageUrl: "./assets/images/playlistImg.jpg",
      tracks: []
    });
    deActivateEditMode();
  };
  emit();
};

// открытие / закрытие режима редактирования
export const activateEditMode = (playlistId = null) => {
  // открыть окно редактирования
  editModeState.isOpen = !editModeState.isOpen
  // если передали id плейлиста - режим редактирования
  if(playlistId) {
    const playlist = playlists.find( (p) => p.id == playlistId);
    editModeState.newPlaylistTitle = playlist.title;
    editModeState.id = playlist.id;
  } else {
    editModeState.newPlaylistTitle = '';
    editModeState.id = null;
  };
  emit();
};
export const deActivateEditMode = () => {
  editModeState.isOpen = !editModeState.isOpen;
  editModeState.newPlaylistTitle = '';
  editModeState.id = null;
  emit()
};

// обновление названия нового плейлиста
export const createNewPlaylistTitle = (title) => {
  editModeState.newPlaylistTitle = title;
  emit()
};

// уведомление о новой подписке (пройти по списку подписчиков и подписаться на всех)
export const emit = () => observers.forEach((observer) => observer());
// функция подписки
export const subscribe = (observer) => {
  observers.push(observer)
};

// НЕ ВНЕДРЕННОЕ В ui
// синхронизация ссылок на трек
export const syncUrlTrack = (inputUrl) => {
  syncSrcPlayer.src = inputUrl;
};
// удаление и добавление треков 
export const deleteTrack = (id) => {
  tracks = tracks.filter((track) => track.id !== id);
  emit();
};
export const addTrack = () => {
  const newTrack = {
    id: 3,
    trackImageUrl: "",
    title: "",
    artistName: "",
    fileUrl: "",
    isHot: false,
  };
    tracks.push(newTrack);
  emit();
};






window.playlists = playlists;