// models/Post.model.js

const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    content: {
      type: String,
      trim: true,
      required: [true, 'Content is required.'],
      unique: true
    },
    creatorId: {
      type: [ {type: Schema.Types.ObjectId, 
				ref: 'User'} ],
      required: [true, 'CreatorId is required.'],
      unique: true,
      trim: true
		},
		picPath: {
    	imageUrl: String
		},
    picName: {
			title: String,
    	description: String,
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('Post', postSchema);
