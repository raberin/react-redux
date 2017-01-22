const config = {
  apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8082/api/' : 'http://productionapi.com',
  port: process.env.PORT || 8000,
};

export default config;
