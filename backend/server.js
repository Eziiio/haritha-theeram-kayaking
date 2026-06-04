require('dotenv').config();
const app = require('./src/app');
const connectDB = async () => {
  try {
    const db = require('./src/config/db');
    await db();
  } catch (error) {
    console.error('Failed to initialize database connection:', error);
  }
};

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
