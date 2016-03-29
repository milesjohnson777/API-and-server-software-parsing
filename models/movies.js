var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Movie = new Schema({"Title" : String,
                                  "Runtime" : String,
                                  "Rated" : String,
                                  "Actors" : String,
                                  "Plot": String
                              });

module.exports = mongoose.model('Movie', Movie);
