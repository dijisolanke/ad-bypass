// Function to remove ad elements from the page
function removeAds() {
  // Select and remove ad elements
  const adElements = document.querySelectorAll(
    'tp-yt-paper-dialog[role="dialog"], .ytp-ad-player-overlay'
  );
  adElements.forEach((ad) => ad.remove());

  // Optionally, click the play button if the video is paused due to an ad
  const playButton = document.querySelector(".ytp-play-button");
  if (playButton && playButton.getAttribute("aria-label") === "Play (k)") {
    playButton.click();
  }
}

// Function to monitor changes in the DOM for ads
function observeDOMChanges() {
  const observer = new MutationObserver(() => {
    removeAds();
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Initial call to remove ads and set up the observer
removeAds();
observeDOMChanges();
