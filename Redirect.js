
if (location.pathname.startsWith("/shorts/")) {
    const videoID = location.pathname.split("/")[2];
    if (videoID) {
        location.replace("https://www.youtube.com/watch?v=${videoID}");
    }
}
