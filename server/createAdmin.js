const mongoose = require('mongoose');
const Admin = require('./models/Admin');
require('dotenv').config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    const adminExists = await Admin.findOne({ email: 'admin@sagar.com' });
    if (adminExists) {
      console.log('Admin already exists');
      process.exit();
    }

    const admin = new Admin({
      email: 'admin@sagar.com',
      password: 'sagar@8897',
    });

    await admin.save();
    console.log('Admin user created: admin@sagar.com / sagar@8897');
    process.exit();
  } catch (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  }
};

createAdmin();
