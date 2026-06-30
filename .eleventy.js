module.exports = function(eleventyConfig) {
  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  // Custom Collections
  eleventyConfig.addCollection("portfolio", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/portfolio/*.md");
  });

  eleventyConfig.addCollection("gallery", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/gallery/*.md");
  });

  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });

  eleventyConfig.addCollection("zines", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/zines/*.md");
  });

  // Custom Filters
  eleventyConfig.addFilter("postDate", function(dateObj) {
    if (!dateObj) return "";
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  eleventyConfig.addFilter("limit", function(arr, limit) {
    if (!Array.isArray(arr)) return [];
    return arr.slice(0, limit);
  });

  eleventyConfig.addFilter("urlencode", function(str) {
    if (!str) return "";
    return encodeURIComponent(str);
  });

  eleventyConfig.addShortcode("currentYear", function() {
    return new Date().getFullYear().toString();
  });

  return {
    dir: {
      input: "src",
      output: "public"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
