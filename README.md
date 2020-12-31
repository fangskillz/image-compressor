# Fang Image Compressor
___
FIC (Fang Image Compressor) is a TypeScript Image Compressor using HTML5 Canvas that allows you to compress your jpeg & png images. (100% client-side and no extra libraries required!)

Could you imagine how much bandwidth we can save if Google, Twitter, and Facebook implement this image compression before we upload those 5MB photos? This approach will make internet faster!

# Requirements or Dependencies
___

* NONE

# Install via NPM 
___
```sh
    npm install fang-compressor --save-dev
```

# Install via Yarn
___
```sh
    yarn add --dev fang-compressor
```


# How it works
___
To compress the image, first it converts and image object to canvas and then compress it with the canvas method **toDataURL(mimetype, quality)**

# Example
___

```typescript
    import ImageCompressor from "fang-compressor";
    
    const compressor = new ImageCompressor();
    
    var my_img = document.getElementById("my_img");
    
    // quality ranges from 0 - 100
    var quality = 80;
    // output file format ("jpg" || "png")
    var outputFormat = "png";
```