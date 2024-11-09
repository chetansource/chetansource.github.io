document.getElementById("play-button").addEventListener("click", function () {
  // Get the audio and source elements
  const audioElement = document.getElementById("lazy-audio");
  const sourceElement = document.getElementById("audio-source");

  // Retrieve the audio source URL from the data attribute
  const audioSrc = sourceElement.getAttribute("data-src");
  if (!audioSrc) {
    console.error("Audio source not found");
    return;
  }

  // Set the actual source URL and load the audio
  sourceElement.src = audioSrc;
  audioElement.load();
  audioElement.play();

  // Show the audio controls after setting the source
  audioElement.style.display = "block";

  // Optionally hide the play button after the first click
  //   this.style.display = "none";
});
