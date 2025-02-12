fetch("https://paktopup537.blogspot.com/videos.json")
    .then(response => response.json())
    .then(videos => {
        const videoGallery = document.getElementById('videoGallery');
        videoGallery.innerHTML = '';

        videos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';
            videoItem.innerHTML = `
                <iframe src="https://www.youtube.com/embed/${getYouTubeID(video.videoSrc)}" allowfullscreen></iframe>
                <h3>${video.title}</h3>
                <a href="${video.downloadLink}" class="download-link" target="_blank">Download</a>
            `;
            videoGallery.appendChild(videoItem);
        });
    });

function getYouTubeID(url) {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/;
    const match = url.match(regex);
    return match ? match[1] : '';
}
