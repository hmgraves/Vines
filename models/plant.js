const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commmentSchema = new Schema({
	content: {
		type: String,
		required: true
	}, 
}, {
	timestamps: true
});

const plantSchema = new Schema({
	name: String,
	water: String,
	light: String, 
	bought: {
		type: Date,
		required: true
	},
	repot: {
		type: Date,
		required: true
	},
	data: Buffer,
    contentType: String,
	comments: [commmentSchema],
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	userName: String,
	userAvatar: String
});


module.exports = mongoose.model('Plant', plantSchema);