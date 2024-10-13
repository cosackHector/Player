export const getTopsArtist = (inputTracksArray) => {
    const arrayFromArtist = getArtistsNameArray(inputTracksArray);
    const top = [];
    const countArtist = {};

    arrayFromArtist.forEach((artist) => {
        countArtist[artist] = (countArtist[artist] || 0) + 1
    });

    Object.entries(countArtist)
        .sort((a, b) => a[1] - b[1])
        .slice(0, 3)
        .forEach((artist) => {
            top.push(artist[0])
        })
    return top;
};

function getArtistsNameArray(inputTracksArray) {
    const array = [];
        inputTracksArray.forEach(track => {
            array.push(track.artistName)
        });
    return array;
};
