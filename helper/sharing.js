export default async function webShare({ title: text }, element) {
    if (navigator.share && element instanceof HTMLImageElement) {
        const imageUrl = element.src;
        const filePromise = fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => new File([blob], 'image.jpg', { type: 'image/jpeg' }));

        filePromise.then(file => {
            const filesArray = [file];
            navigator.share({ files: filesArray });
        });
    } else if (navigator.share && element instanceof HTMLVideoElement) {
        const videoUrl = element.children[0].src;
        const filePromise = fetch(videoUrl)
            .then(response => response.blob())
            .then(blob => new File([blob], 'video.mp4', { type: 'video/mp4' }));

        filePromise.then(file => {
            const filesArray = [file];
            navigator.share({ files: filesArray, text, title: 'memeshub' });
        });
    }
}
