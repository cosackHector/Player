export const getTopsArtist = (inputTracksArray) => {
    const arrayFromArtist = getArtistsNameArray(inputTracksArray);
    const top = [];
    const countArtist = {};

    arrayFromArtist.forEach((artist) => {
        countArtist[artist] = (countArtist[artist] || 0) + 1
    });

    Object.entries(countArtist)
        .sort((a, b) => a[1] - b[1])
        .forEach((artist) => {
            top.push(artist[0])
        });
        const res = top.length > 2 ? top.slice(0, 3) : top.slice(0, 2);
    return res.join(', ');
};

function getArtistsNameArray(inputTracksArray) {
    const array = [];
        inputTracksArray.forEach(track => {
            array.push(track.artistName)
        });
    return array;
};
