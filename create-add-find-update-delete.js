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

// --- CREATE a DB item in document -------------
// const <constantName> = new <ModelName> ({
// <fieldName> : <fieldData>,
// ...
// <constName>.save();
// ----------------------------------------------


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
  
  
// Let's update the document
Fruit.updateOne({_id:"62a18e078c9aa71d5d6b87f1"}, {name:"JackFruit"}, function(err) {
  if (err){
  console.log(err);
} else {
  console.log("Sucessfully updated");
}
});
  
  //Let's delete a record
Fruit.deleteOne({_id: "629705cdae1562eb1b7a8523"}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Deleted!");
  }
});
  
  //Let's delete MANY record
Fruit.deleteMany({name:"Broskev"}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Deleted!");
  }
});
