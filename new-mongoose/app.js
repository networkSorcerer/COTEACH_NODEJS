const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongoose-test");
const validator = require("validator");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        if (!validator.isEmail(value)) throw new Error("this is not an email");
      },
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: String,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);

const newUser = new User({
  name: "홍길동",
  email: "홍길동@mail.com",
  password: "    sdf",
  age: 25,
});

newUser.save().then((value) => console.log("value is", value));

User.find({ name: "홍길동" })
  .select("name -_id")
  .then((value) => console.log("all data", value));
