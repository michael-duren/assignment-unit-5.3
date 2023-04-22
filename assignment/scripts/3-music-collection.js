console.log('***** Music Collection *****');

const collection = [];

const addToCollection = (title, artist, yearPublished) => {
  const album = {
    title,
    artist,
    yearPublished,
  };
  collection.push(album);
  return album;
};

const showCollection = (collectionArray) => {
  console.log(collectionArray.length);
  collectionArray.forEach((album) => {
    console.log(
      `${album.title} by ${album.artist}, published in ${album.yearPublished}`
    );
  });
};

// add content to collection
addToCollection(
  'Mellon Collie and the Infinite Sadness',
  'The Smashing Pumpkins',
  1996
);
addToCollection('The Bends', 'Radiohead', 1995);
addToCollection('Kid A', 'Radiohead', 2001);
addToCollection('Nevermind', 'Nirvana', 1992);
addToCollection('Fear of a Black Planet', 'Public Enemy', 1990);

// test showCollection
showCollection(collection);

// findByArtist
const findByArtist = (artist) => {
  return collection.filter(
    (song) => song.artist.toLowerCase() === artist.toLowerCase()
  );
};

// test findByArtist
// multiple finds
const radiohead = findByArtist('Radiohead');
console.log('\nSongs by Radiohead:', radiohead);
// single find, also test that function is not case sensitive
const smashingPumpkins = findByArtist('the smashing pumpkins');
console.log('\nSongs by The Smashing Pumpkins:', smashingPumpkins);
// no find, returns empty array
const biggieSmalls = findByArtist('The Notorious B.I.G.');
console.log('\nSongs by The Notorious B.I.G.', biggieSmalls);

// search
const search = (searchObj) => {};
