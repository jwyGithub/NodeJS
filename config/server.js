module.exports = {
  local: {
    open: true,
    baseUrl: "localhost",
    mongobaseUrl: "34.92.230.15",
    mongoPort: 27017,
    port: 3001
  },
  http: {
    open: false,
    baseUrl: "34.92.230.15",
    mongoPort: 27017,
    port: 8080
  },
  https: {
    open: false,
    port: 443
  }
}