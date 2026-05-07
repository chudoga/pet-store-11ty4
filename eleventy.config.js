export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addGlobalData("categoryMap", {
    food: '食品',
    toys: '玩具',
    accessories: '配件',
    health: '健康'
  });

  eleventyConfig.addGlobalData("pathPrefix", "/pet-store-11ty4");

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    pathPrefix: "/pet-store-11ty4"
  };
};
