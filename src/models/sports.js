'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const sportSchema = Schema({
  userID: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
  },
  token: {
    type: String,
    required: true,
  },
  players: [{
    type: Schema.Types.ObjectId, 
    ref: 'sports',
  }],
});

export default mongoose.model('sports', sportSchema);