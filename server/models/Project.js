const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
    required: false,
  },
  liveLink: {
    type: String,
    required: false,
  },
  technologies: {
    type: [String],
    default: [],
  },
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
