// Random message generator

const placeArray = [
  "into the side of a house",
  "through my front window",
  "through a Denny's",
  "into the ocean",
  "into my head",
  "over the rainbow",
  "under the bridge",
];
const verbArray = [
  "flew",
  "ran",
  "dove",
  "fell",
  "jumped",
  "walked",
  "crawled",
  "danced",
  "sang",
];
const nounArray = [
  "bird",
  "aardvark",
  "zebra",
  "teddy bear",
  "ghost",
  "pineapple",
  "frog",
  "avocado",
];
const generateButton = document.getElementById("generate");

const generateMessage = () => {
  const place = itemPicker(placeArray);
  const noun = itemPicker(nounArray);
  const verb = itemPicker(verbArray);

  console.log(`The ${noun} ${verb} ${place}.`);
};

const itemPicker = (array) => {
  const item = array[Math.floor(Math.random() * array.length)];
  return item;
};

itemPicker(placeArray);

generateButton.addEventListener("click", generateMessage);
