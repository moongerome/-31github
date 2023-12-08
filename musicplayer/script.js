document.addEventListener("DOMContentLoaded", () => {
  const audioPlayer = document.getElementById("audioPlayer");
  const playlist = document.getElementById("playlist");

  const songs = [
    { title: "Song 1", source: "path/to/song1.mp3" },
    { title: "Song 2", source: "path/to/song2.mp3" },
    // Add more songs as needed
  ];

  // Populate the playlist
  songs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = song.title;
    listItem.addEventListener("click", () => playSong(index));
    playlist.appendChild(listItem);
  });

  function playSong(index) {
    const selectedSong = songs[index];
    audioPlayer.src = selectedSong.source;
    audioPlayer.play();
  }
});
