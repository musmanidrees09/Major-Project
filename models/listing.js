const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: Object,
    default:
      "https://unsplash.com/photos/a-pink-building-with-palm-trees-in-front-of-it-sv32VG9l3F",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/a-pink-building-with-palm-trees-in-front-of-it-sv32VG9l3F"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
