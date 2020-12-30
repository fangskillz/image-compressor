class ImageCompressor {
    constructor() {}

    /**
     * @param img Image source required to compress. Type can only be "jpg" or "png".
     * @param quality Image quaility rang from 0 - 100.
     * @param output Image compress result option "jpg" or "png".
     */
    compress(img: HTMLImageElement, quality: number, output: "jpg" | "png") {
        let mime_type = "image/jpeg";
        if(typeof img != "undefined" && output == "png") {
            mime_type = "image/png";
        }

        const cvs = document.createElement('canvas');
        cvs.width = img.naturalWidth;
        cvs.height = img.naturalHeight;
        //@ts-ignore
        const ctx = cvs.getContext("2d").drawImage(img, 0, 0);
        let imageData = cvs.toDataURL(mime_type, quality/100);
        let result_img = new Image();
        result_img.src = imageData;
        return result_img;
    }
}

export default ImageCompressor;