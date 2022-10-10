const handleShareError = message => {
    // eslint-disable-next-line
    console.warn({
        type: 'error',
        message
    });
};

export const urlToObject = async url => {
    const response = await fetch(url);
    const blob = await response.blob();
    const file = new File([blob], 'image.jpg', { type: blob.type });
    return file;
};

export async function webShare({ title: text}, filesUrl) {
    let files;
    // Test compatibility
    if (navigator.share === undefined) {
        handleShareError('Unsupported share feature');
        return;
    }

    // Handle file urls
    if (filesUrl && filesUrl.length > 0) {
        // const filesGetter = filesUrl.map(file => urlToObject(file));
        const filesGetter = [urlToObject(filesUrl)]
        const newFiles = await Promise.all(filesGetter);

        if (!navigator.canShare || !navigator.canShare({ files: newFiles })) {
            handleShareError('Unsupported share feature');
            return;
        }

        files = newFiles;
    }

    // Share content
    try {
        await navigator.share({ text, files });
    } catch (error) {
        handleShareError(`Error sharing: ${error}`);
    }
}
