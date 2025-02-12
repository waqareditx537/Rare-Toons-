const jsonURL = "https://drive.google.com/uc?export=download&id=1POal5jPOxX6AeJNY8GcCIQ4KY8Oh-kig";

fetch(jsonURL)
    .then(response => response.json())
    .then(videos => {
        const videoGallery = document.getElementById("videoGallery");
        videos.forEach(video => {
            videoGallery.innerHTML += `
                <div class="video-container">
                    <h3>${video.title}</h3>
                    <iframe src="${video.videoSrc}" allowfullscreen></iframe>
                    <br>
                    <a href="${video.downloadLink}" target="_blank">Download</a>
                </div>
            `;
        });
    })
    .catch(error => console.error("Error loading videos:", error));
