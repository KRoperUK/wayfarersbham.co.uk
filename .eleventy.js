module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "src", // Adjust to match your source folder
            output: "_site"
        },
        templateFormats: ["njk", "html"],
    };
};
