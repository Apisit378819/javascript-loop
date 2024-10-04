// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
for (let name of restaurants) {
  name = "Restaurant Name: " + name;
  newRestaurants.push(name);
}

console.log(newRestaurants);
