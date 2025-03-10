module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/js/works_js/");
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("./src/works/");
  eleventyConfig.addPassthroughCopy("./src/works.njk");
  eleventyConfig.addPassthroughCopy("./src/_includes/article.njk");
  eleventyConfig.addPassthroughCopy("./src/works/*.md");
  eleventyConfig.addPassthroughCopy("./src/cv/");
  eleventyConfig.addPassthroughCopy("./src/cv/*.md");
  eleventyConfig.addPassthroughCopy("./src/bio/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/images/uploads");
  eleventyConfig.addPassthroughCopy("./src/puzzle.html");
  eleventyConfig.addPassthroughCopy("./src/puzzle/");
  eleventyConfig.addPassthroughCopy("./src/_includes/base_puzzle.njk");
  eleventyConfig.addPassthroughCopy("./src/_includes/");
  eleventyConfig.addPassthroughCopy("./src/js/works_js/menuprojets_phone2.js");

  // Corrected line: use eleventyConfig instead of config
  eleventyConfig.addPassthroughCopy("src/admin/")
  eleventyConfig.addPassthroughCopy("src/admin/config.yml", "admin/config.yml")


  // Test configuration pour bold, italic et tout: 
// Markdown Plugins
// Add above your Eleventy config
const markdownIt = require("markdown-it");

// Add within your config module
const md = new markdownIt({
  html: true,         //originally set to true
  typographer: true, //originally set to true
  breaks: false,    //originally set to false
  linkify: true
});

eleventyConfig.addFilter("markdown", (content) => {
  return md.render(content);
});

  //TRI PAR DATES DANS LE CV
  function getStartYear(dateRange) {
    // Extract the starting year from the date range
    const match = dateRange.match(/\d{4}/);
    return match ? parseInt(match[0], 10) : NaN;
  }

  eleventyConfig.addCollection("sortedEducation", function(collectionApi) {
    const educationItems = collectionApi.getFilteredByTag("education", "cv");
    return educationItems.sort((a, b) => {
      const yearA = getStartYear(a.data.dates_formation);
      const yearB = getStartYear(b.data.dates_formation);
      return yearB - yearA;
    });
  });

  eleventyConfig.addCollection("sortedSoloShows", function(collectionApi) {
    const educationItems = collectionApi.getFilteredByTag("solo_show", "cv");
    return educationItems.sort((a, b) => {
      const yearA = getStartYear(a.data.dates_formation);
      const yearB = getStartYear(b.data.dates_formation);
      return yearB - yearA;
    });
  });

  eleventyConfig.addCollection("sortedShows", function(collectionApi) {
    const showItems = collectionApi.getFilteredByTag("show", "cv");
    return showItems.sort((a, b) => {
      const yearA = getStartYear(a.data.dates_show);
      const yearB = getStartYear(b.data.dates_show);
      return yearB - yearA;
    });
  });

  eleventyConfig.addCollection("sortedPerformance", function(collectionApi) {
    const performanceItems = collectionApi.getFilteredByTag("performance", "cv");
    return performanceItems.sort((a, b) => {
      const yearA = getStartYear(a.data.dates_performance);
      const yearB = getStartYear(b.data.dates_performance);
      return yearB - yearA;
    });
  });

  eleventyConfig.addCollection("sortedCurating", function(collectionApi) {
    const curatingItems = collectionApi.getFilteredByTag("curation", "cv");
    return curatingItems.sort((a, b) => {
      const yearA = getStartYear(a.data.dates_curation);
      const yearB = getStartYear(b.data.dates_curation);
      return yearB - yearA;
    });
  });

  eleventyConfig.addCollection("sortedResidency", function(collectionApi) {
    const residencyItems = collectionApi.getFilteredByTag("residency", "cv");
    return residencyItems.sort((a, b) => {
      const yearA = getStartYear(a.data.dates_residency);
      const yearB = getStartYear(b.data.dates_residency);
      return yearB - yearA;
    });
  });

  eleventyConfig.addCollection("sortedAssociation", function(collectionApi) {
    const associationItems = collectionApi.getFilteredByTag("association", "cv");
    return associationItems.sort((a, b) => {
      const yearA = getStartYear(a.data.dates_association);
      const yearB = getStartYear(b.data.dates_association);
      return yearB - yearA;
    });
  });

  eleventyConfig.addCollection("sortedPress", function(collectionApi) {
    const pressItems = collectionApi.getFilteredByTag("press", "cv");
    return pressItems.sort((a, b) => {
      const yearA = getStartYear(a.data.dates_press);
      const yearB = getStartYear(b.data.dates_press);
      return yearB - yearA;
    });
  });

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


  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    // Add markdown library configuration
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    markdownOptions: {
      html: true,
      typographer: true,
      breaks: false,
      linkify: true,
    },
  };
};
