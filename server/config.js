const config = {
  apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8082/api/' : 'https://production.testserver.com/api/',
  port: process.env.PORT || 8000,
};

export default config;
