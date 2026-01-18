# Image Optimization Guide

Since the native image processing library has installation issues, here are alternative approaches:

## Option 1: Manual Optimization (Recommended)

Use online tools or desktop software to create optimized versions:

1. **For thumbnails**: Create images at 800px width, 85% quality
2. **For full-size**: Create images at 1920px width, 90% quality

Recommended tools:
- **Online**: https://squoosh.app (Google's free image optimizer)
- **Desktop**: GIMP, Photoshop, or ImageOptim (Mac)
- **CLI**: ImageMagick (if available)

## Option 2: Using ImageMagick (if available)

```bash
# Create thumbnail
convert input.jpg -resize 800x -quality 85 thumbnail.jpg

# Create optimized full-size
convert input.jpg -resize 1920x -quality 90 fullsize.jpg
```

## Option 3: Browser-based Lazy Loading

The site uses HTML `loading="lazy"` attribute for automatic browser optimization.

## File Naming Convention

For each photo post:
- Original: `photo-name.jpg` (place in `src/photos/`)
- Thumbnail: `photo-name-thumb.jpg` (place in `src/photos/`)

In your photo post frontmatter:
```yaml
image: photo-name.jpg
thumbnail: photo-name-thumb.jpg
imageWidth: 1920
imageHeight: 1280
```
