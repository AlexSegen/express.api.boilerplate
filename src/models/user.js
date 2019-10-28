'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roles = ['user', 'admin', 'superadmin']

const genders = ['male', 'female', 'undefined']

const userSchema = new Schema({
  first_name: {
    type: String,
    maxlength: 128,
    required: true
  },
  last_name: {
    type: String,
    maxlength: 128,
    required: true
  },
  gender: {
    type: String,
    default: 'undefined',
    enum: genders
  },
  dob: {
    type: Date,
    default: null
  },
  location: {
    street: {
      type: String,
      default: null
    },
    city: {
      type: String,
      default: null
    },
    state: {
      type: String,
      default: null
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 128
  },
  role: {
    type: String,
    default: 'user',
    enum: roles
  },
  avatar: {
    type: String,
    default: 'https://avatars.dicebear.com/v2/gridy/pixelagil.svg'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})



module.exports = mongoose.model('User', userSchema)