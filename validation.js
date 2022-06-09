// For validation, you have to have an object in array {}

const fruitSchema = new mongoose.Schema({
    
  // Let's REQUIRE the name
   name: {
      type: String,
      required: [true,"The name is required"]
    },
  
    // Let's set MIN and MAX for the number  
    rating: {
    type: Number,
    min: 1,
    max: 10 },
  
    review: String
  });

