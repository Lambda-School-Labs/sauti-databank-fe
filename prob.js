const name = "procedurecommodity";
const arr = [
  "Maize",
  "Passion fruits",
  "Onions",
  "Bananas - Matoke",
  "Rice - Husked",
  "Sweet Potatoes",
  "Lemons",
  "Carrots",
  "Millet",
  "Watermelon",
  "Rice - Processed",
  "Oranges",
  "Mangoes",
  "Beans",
  "Irish Potatoes",
  "Avocado",
  "Kales",
  "Cabbage",
  "Sorghum",
  "Groundnuts",
  "Tomatoes",
  "Greengrams",
  "Pineapples",
  "Chillies",
  "Fresh Cassava",
  "Arrow Roots (nduma)",
  "Mwezi Moja",
  "Maize Flour",
  "Millet Flour",
  "Capsicums/pepper",
  "Spinach",
  "Brinjals/Eggplant",
  "Cowpeas",
  "Pawpaws (papaya)",
  "Dolichos (Njahi)",
  "Fresh peas",
  "Cauliflower",
  "Geese",
  "Bulls/Cows",
  "Goat",
  "Guinea Fowl",
  "Bananas Ripe",
  "Cashew Nuts",
  "Honey",
  "Timber",
  "Cosmetics",
  "Hides & Skins",
  "Clothes and Shoes (Used)",
  "Clothes and Shoes (New)",
  "Chicken (Broiler)",
  "Milk",
  "Lime",
  "Chicken (Local)",
  "Bananas Cooking",
  "Guavas",
  "Sorghum Grains",
  "Goats",
  "Meat of bulls/cows/Goats/Sheep",
  "Eggs",
  "Honey (Natural)",
  "Wheat Flour",
  "Wheat Grain",
  "Fresh Nile Perch",
  "Nile Perch Dried or Preserved ",
  "Sheep",
  "Flowers",
  "Omena",
  "Tilapia Dried or Preserved",
  "Tilapia Fresh",
  "Sorghum Flour",
  "Duck",
  "Bulls & Cows",
  "Maize Cereal",
  "Tilapia",
  "New Clothing and Shoes",
  "Sorghum Cereal",
  "New Clothes",
  "Bananas",
  "Clothes (New)",
  "Clothing and Shoes (Used)",
  "Clothes  & Shoes (New)",
  "Nile Perch",
  "Shoes (New)",
  "Chickens (Local)",
  "Clothes (Used)",
  "Avocados",
  "Plastics",
  "Cucumber"
];

const objectify = (key, array) => {
  const arr = [];
  // console.log(array)
  array.forEach(cv => arr.push({ [key]: cv }));
  return arr;
};

console.log(objectify(name, arr.sort()));