export default () => ({
  server: {
    port: parseInt(process.env.SERVER_PORT, 10) || 8080,
  },
  cilent: process.env.CLIENT || 'http://localhost:3000',
});