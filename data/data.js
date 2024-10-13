// data
export let  playlists = [
  {
    id: 1,
    title: "Hip-Hop Hits",
    coverImageUrl: "./assets/images/playlistImg.jpg",
    tracks: [
      {
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
        trackImageUrl: "./assets/images/trackImg.jpg",
        title: "Rap God",
        artistName: "Eminem",
        fileUrl: "./music/RapGod.mp3",
        isHot: false,
      },
      {
        trackImageUrl: "./assets/images/track2Img.jpg",
        title: "In da club",
        artistName: "50cent",
        fileUrl: "./music/InDaClub.mp3",
        isHot: false,
      },
    ],
  },
  {
    id: 3,
    title: "Hip-Hop Hits",
    coverImageUrl: "./assets/images/playlistImg.jpg",
    tracks: [
      {
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
];


// observers / subscribers / listeners / handlers
const observers = []; 

// functions
export const deletePlaylist = (id) => {
  playlists = playlists.filter((pl) => pl.id !== id );
  observers.forEach((observer) => {
    observer();
  })
};
export const addPlaylist = () => {
  playlists.push({
    id: Date.now(),
    title: "New Playlist",
    coverImageUrl: "./assets/images/playlistImg.jpg",
    tracks: []
  });
  observers.forEach((observer) => {
    observer();
  });
};


export const subscribe = (observer) => {
  observers.push(observer)
};














window.playlists = playlists;