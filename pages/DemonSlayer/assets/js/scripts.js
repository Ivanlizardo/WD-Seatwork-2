const video = document.getElementById("bg-video");
const speaker = document.querySelector(".speaker");

speaker.addEventListener("click", () => {
  video.muted = !video.muted;

  // Optional: toggle icon class
  speaker.classList.toggle("muted", video.muted);
});
