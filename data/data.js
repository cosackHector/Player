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
        artistName: "Eminem",
        fileUrl: "./music/RapGod.mp3",
        isHot: false,
      },
      {
        id: 2,
        trackImageUrl: "./assets/images/track2Img.jpg",
        title: "In da club",
        artistName: "50cent",
        fileUrl: "./music/InDaClub.mp3",
        isHot: true,
      },
      {
        id: 1,
        trackImageUrl: "./assets/images/trackImg.jpg",
        title: "Rap God",
        artistName: "Eminem",
        fileUrl: "./music/RapGod.mp3",
        isHot: false,
      },
      {
        id: 2,
        trackImageUrl: "./assets/images/track2Img.jpg",
        title: "In da club",
        artistName: "50cent",
        fileUrl: "./music/InDaClub.mp3",
        isHot: true,
      },
      {
        id: 1,
        trackImageUrl: "./assets/images/trackImg.jpg",
        title: "Rap God",
        artistName: "Eminem",
        fileUrl: "./music/RapGod.mp3",
        isHot: false,
      },
      {
        id: 2,
        trackImageUrl: "./assets/images/track2Img.jpg",
        title: "In da club",
        artistName: "50cent",
        fileUrl: "./music/InDaClub.mp3",
        isHot: true,
      },
    ],
  },
  {
    id: 2,
    title: "Rap Hits 1990s",
    coverImageUrl: "./assets/images/playlistImg.jpg",
    tracks: [
      {
        id: 1,
        trackImageUrl: "./assets/images/trackImg.jpg",
        title: "Rap God",
        artistName: "Eminem",
        fileUrl: "./music/RapGod.mp3",
        isHot: false,
      },
      {
        id: 2,
        trackImageUrl: "./assets/images/track2Img.jpg",
        title: "In da club",
        artistName: "50cent",
        fileUrl: "./music/InDaClub.mp3",
        isHot: false,
      },
    ],
  },
];
// данные всплывающего окна 
export const editModeState = {
  newPlaylistTitle: '',
  isOpen: false,
  isDisable: false,
};

// массив с подписчиками  // observers / subscribers / listeners / handlers
const observers = []; 

// functions
// удаление и добавление плейлистов
export const deletePlaylist = (id) => {
  playlists = playlists.filter((pl) => pl.id !== id );
  emit()
};
export const addPlaylist = () => {
  if(!editModeState.newPlaylistTitle) {
    return alert('введите название плейлиста');
  }
  playlists.push({
    id: Date.now(),
    title: editModeState.newPlaylistTitle,
    coverImageUrl: "./assets/images/playlistImg.jpg",
    tracks: []
  });
  editModeState.isOpen = !editModeState.isOpen;
  editModeState.newPlaylistTitle = '';
  emit();
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

// открытие и закрытие окна добавления плейлиста
export const openAddEditMode = () => {
  editModeState.isOpen = !editModeState.isOpen
  emit()
};
export const closedAddEditMode = () => {
  editModeState.isOpen = '';
  emit()
};
// обновление заголовка нового плейлиста
export const createNewPlaylistTitle = (title) => {
  editModeState.newPlaylistTitle = title;
};

// уведомление о новой подписке (пройти по списку подписчиков и подписаться на всех)
export const emit = () => observers.forEach((observer) => observer());
// функция подписки
export const subscribe = (observer) => {
  observers.push(observer)
};









window.playlists = playlists;