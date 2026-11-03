const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/photos");
  eleventyConfig.addPassthroughCopy("src/zorgzoeker");
  eleventyConfig.addPassthroughCopy("node_modules/photoswipe/dist/photoswipe.css");
  eleventyConfig.addPassthroughCopy("node_modules/photoswipe/dist/photoswipe-lightbox.esm.js");
  eleventyConfig.addPassthroughCopy("node_modules/photoswipe/dist/photoswipe.esm.js");

  // Date filters
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Limit filter
  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.slice(0, limit);
  });

  // Truncate filter
  eleventyConfig.addFilter("truncate", (str, length = 150) => {
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
  });

  // Collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("microposts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/microposts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("photos", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/photoblog/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // All blog content combined (posts + microposts)
  eleventyConfig.addCollection("allBlogPosts", function(collectionApi) {
    const posts = collectionApi.getFilteredByGlob("src/posts/*.md");
    const microposts = collectionApi.getFilteredByGlob("src/microposts/*.md");
    return [...posts, ...microposts].sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
