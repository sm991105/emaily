// ajax : asynchronous javascript and xml.

// fetch returns a promise
// use .then() syntax
// get access to the actual data

function fetchAlbums() {
  fetch("http://rallycoding.herokuapp.com/api/music_albums")
    .then((res) => res.json())
    .then((json) => console.log(json));
}

async function fetchAlbums() {
  const res = await fetch("http://rallycoding.herokuapp.com/api/music_albums");
  const json = await res.json();

  console.log(json);
}
