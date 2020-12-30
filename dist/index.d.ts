declare class ImageCompressor {
    constructor();
    /**
     * @param img Image source required to compress. Type can only be "jpg" or "png".
     * @param quality Image quaility rang from 0 - 100.
     * @param output Image compress result option "jpg" or "png".
     */
    compress(img: HTMLImageElement, quality: number, output: "jpg" | "png"): HTMLImageElement;
}
export default ImageCompressor;
