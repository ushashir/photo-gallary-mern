const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ushashir:usha0816@cluster0-4dnxz.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});