const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   review: String
// });

// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: {
//     type: Number,
//     min: 1,
//     max: 10
//   },
//   review: String
// });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 7,
//   review: "Pretty solid as a fruit."
// });

// const fruit = new Fruit({
//   rating: 10,
//   review: "Peaches are so yummy."
// });

// fruit.save();

// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const mango = new Fruit({
//   name: "Mango",
//   score: 10,
//   review: "Best fruit"
// });

// mango.save();

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit"
});

pineapple.save();

// const person = new Person({
//   name: "Jahanzeb",
//   age: 37
// });

// const person = new Person({
//   name: "Alishba",
//   age: 12,
//   favoriteFruit: mango
// });

// person.save();

Person.updateOne({name: "Jahanzeb"}, {favoriteFruit: pineapple}, function(err) {
  if (err){
    console.log(err);
  } else {
    mongoose.connection.close();
    console.log("Successfully updated the document");
  }
});

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best fruit."
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   rating: 4,
//   review: "Too sour for me."
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   rating: 3,
//   review: "Weird texture."
// });
//
// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

// Fruit.updateOne({_id: "5fb0d1280271236378783159"}, {name: "Peach"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document");
//   }
// });

// Fruit.deleteOne({name: "Peach"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document");
//   }
// });

// Fruit.find(function(err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     // console.log(fruits);
//     mongoose.connection.close();
//     fruits.forEach(function(fruit) {
//       // console.log(fruit.name + ":" + fruit.rating)
//       console.log(fruit.name);
//     });
//
//   }
// });
