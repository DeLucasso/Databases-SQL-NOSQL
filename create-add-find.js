// We have to create a schema first // for Fruits
  const fruitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true,"The name is required"]
    },
    rating: {
    type: Number,
    min: 1,
    max: 10 },
    review: String
  });

// Creating model + collection. The Mongo will Always drop the Capital letter in "Fruit"
// and makes it a plural // "fruits"
const Fruit = mongoose.model('Fruit', fruitSchema);

// creating new document
const fruit = new Fruit({
  name: "peach",
  rating: 10,
  review: "LOVELY!"
});

// Saving the data to the database
fruit.save();

// Let's find all fruits in collection so we can work with them
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {

// Let's list each name of the element in collection
fruits.forEach(fruit => console.log(fruit.name));
    // console.log(fruits);
  }
