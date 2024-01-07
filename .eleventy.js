const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("./src/works/");
  eleventyConfig.addPassthroughCopy("./src/works/*.md");
  eleventyConfig.addPassthroughCopy("./src/cv/");
  eleventyConfig.addPassthroughCopy("./src/cv/*.md");
  eleventyConfig.addPassthroughCopy("./src/bio/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/images/uploads");

  // Corrected line: use eleventyConfig instead of config
  eleventyConfig.addPassthroughCopy("src/admin/")
  eleventyConfig.addPassthroughCopy("src/admin/config.yml", "admin/config.yml")

  eleventyConfig.setBrowserSyncConfig({
    // Set the base directory for Eleventy to serve files from
    server: 'dist',
  });

  // Set the base URL for your project
  eleventyConfig.setTemplateFormats(['njk', 'md', 'html']);
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addCollection('works', function (collection) {
    return collection.getFilteredByTag('works');
  });

  eleventyConfig.addCollection('cv', function (collection) {
    // Use either tag-based filtering or glob-based filtering, not both
    return collection.getFilteredByTag('cv');
  });

  eleventyConfig.addCollection('bio', function (collection) {
    return collection.getFilteredByTag('bio');
  });

  eleventyConfig.addCollection('contact', function (collection) {
    return collection.getFilteredByTag('contact');
  });

  let options = {
    html: true,
    breaks: true,
    linkify: true
  };

  eleventyConfig.setLibrary("md", markdownIt(options));

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  }
};
