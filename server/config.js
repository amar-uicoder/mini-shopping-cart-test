const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/ecommerce-app',
  port: process.env.PORT || 3001,
};

export default config;
