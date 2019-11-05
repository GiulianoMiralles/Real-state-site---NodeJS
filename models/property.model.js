const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PropertySchema = Schema({
    description: String,
    slug: String,
    type: String,
    price: String,
    photo: String,
    currency: String,
    featured: Boolean,
    sector: {
        type: String,
        enum: ['Banda Norte', 'Castelli', 'Centro', 'Alberdi']
    }
});

const propertyModel = mongoose.model('properties', PropertySchema);

module.exports = propertyModel;