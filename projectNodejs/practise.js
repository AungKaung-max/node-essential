const fs = require('fs');

// Function to read image file as binary
function readImageAsBinary(imagePath) {
    return fs.readFileSync(imagePath);
}

// Define your image path
const imagePath = "shirt.jpg";

// Read the image file as binary
const imageBinaryData = readImageAsBinary(imagePath);

// Create a JSON object with the binary image data
const jsonData = {
    id: 1,
    name: "example",
    image: imageBinaryData
};

// Write the JSON data to a file
fs.writeFileSync("data.json", JSON.stringify(jsonData, null, 4));

console.log("JSON data with binary image has been written to data.json");
