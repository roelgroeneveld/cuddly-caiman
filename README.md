# Eleventy Blog & Photo Site

A modern, static blog and photo gallery site built with Eleventy. Features two types of blog posts (regular posts and micro posts) and a photo blog with zoom functionality.

## Features

- **Two types of blog posts**:
  - Regular posts with titles for long-form content
  - Micro posts without titles for quick thoughts and notes

- **Photo blog** with:
  - High-quality image display
  - Click-to-zoom functionality using PhotoSwipe
  - Photo metadata (camera, lens, settings, location)
  - Optimized image loading

- **Responsive design** that works on all devices
- **Fast static site** generation
- **Clean, modern UI** with thoughtful typography

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The site will be available at `http://localhost:8080` with live reload.

### Build for Production

To build the static site:

```bash
npm run build
```

The generated site will be in the `_site/` directory.

## Project Structure

```
.
├── src/
│   ├── _layouts/          # Page layouts
│   │   ├── base.njk       # Base template
│   │   ├── post.njk       # Regular blog post layout
│   │   ├── micropost.njk  # Micro post layout
│   │   └── photo.njk      # Photo post layout
│   ├── _includes/         # Reusable components
│   ├── posts/             # Regular blog posts (Markdown)
│   ├── microposts/        # Micro posts (Markdown)
│   ├── photoblog/         # Photo posts (Markdown)
│   ├── photos/            # Photo files
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   ├── blog/              # Blog index page
│   ├── photos/            # Photo gallery index
│   ├── about/             # About page
│   └── index.njk          # Homepage
├── .eleventy.js           # Eleventy configuration
└── package.json
```

## Creating Content

### Regular Blog Post

Create a new Markdown file in `src/posts/`:

```markdown
---
layout: post.njk
title: Your Post Title
date: 2026-01-18
tags:
  - posts
  - your-tag
---

Your post content here...
```

### Micro Post

Create a new Markdown file in `src/microposts/`:

```markdown
---
layout: micropost.njk
date: 2026-01-18
tags:
  - microposts
  - thoughts
---

Your quick thought or note here. No title needed!
```

### Photo Post

1. Add your photos to `src/photos/`:
   - Full-size image (e.g., `photo.jpg`)
   - Thumbnail version (e.g., `photo-thumb.jpg`)

2. Create a new Markdown file in `src/photoblog/`:

```markdown
---
layout: photo.njk
title: Optional Photo Title
date: 2026-01-18
image: photo.jpg
thumbnail: photo-thumb.jpg
imageWidth: 1920
imageHeight: 1280
location: Optional Location
camera: Optional Camera Info
lens: Optional Lens Info
settings: Optional Camera Settings
alt: Descriptive alt text
---

Optional description of the photo...
```

## Image Optimization

For best results, optimize your photos before adding them:

- **Thumbnails**: 800px width, 85% quality
- **Full-size**: 1920px width, 90% quality

See `IMAGE_OPTIMIZATION.md` for detailed instructions and tools.

## Customization

### Styling

Edit `src/css/style.css` to customize the appearance. CSS variables are defined at the top:

```css
:root {
  --primary-color: #2563eb;
  --text-color: #1f2937;
  /* ... */
}
```

### Site Information

Update the following files:
- `src/_layouts/base.njk` - Site title and navigation
- `src/about/index.md` - About page content
- `package.json` - Project metadata

### Collections

Collections are configured in `.eleventy.js`. Current collections:
- `posts` - Regular blog posts
- `microposts` - Micro posts
- `photos` - Photo blog posts
- `allBlogPosts` - Combined posts and microposts

## Deployment

This site generates static HTML and can be deployed to:

- **Netlify**: Connect your Git repository
- **Vercel**: Import from Git
- **GitHub Pages**: Push the `_site` folder
- **Any static hosting**: Upload the `_site` folder

## Technologies Used

- [Eleventy](https://www.11ty.dev/) - Static site generator
- [PhotoSwipe](https://photoswipe.com/) - Photo gallery and zoom
- [Luxon](https://moment.github.io/luxon/) - Date formatting
- Nunjucks - Template engine

## License

MIT
