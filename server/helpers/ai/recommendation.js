let num_of_reqs = 10;
let k_categories = 3;

const getRecommendation = async (outfit, gender) => {
  console.log("OUTFIT HERE " + outfit);
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  const clothing_lookup = require("../../data/clothing_store/" +
    gender +
    "-lookup.json");
  let categories = outfit["categories"];

  topK_categories = categories.slice(0, k_categories);
  recommendations = new Set();
  for (category of topK_categories) {
    cate_images = clothing_lookup[category.name];
    shuffleArray(cate_images);
    if (cate_images.length > num_of_reqs) {
      cate_images = cate_images.slice(0, num_of_reqs);
    }
    cate_images.forEach((image) => recommendations.add(image));
  }
  shuffleArray(recommendations);

  if (recommendations.length > num_of_reqs) {
    recommendations = recommendations.slice(0, num_of_reqs);
  }
  return Array.from(recommendations);
};

module.exports = getRecommendation;
