const config = {
  apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8082/api/' : 'http://productionapi.com',
  port: process.env.PORT || 8000,
  auth: {
    facebook: {
      appId: '1136964629672587111',
    },
  },
};

export default config;
