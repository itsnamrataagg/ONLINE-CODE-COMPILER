const mongoose = require("mongoose");

const ProgramSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  code: {
    type: String,
    required: true
  },

  language: {
    type: String,
    required: true
  },

  input: {
    type: String
  },

  output: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Program", ProgramSchema);