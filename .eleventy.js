module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/js/");
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addPassthroughCopy("./src/works/");
    eleventyConfig.addPassthroughCopy("./src/works/*.md");

    eleventyConfig.addCollection('works', function (collection) {
      return collection.getFilteredByTag('works');
    });

  
    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public",
        includes: "_includes"
      }
    }
  };