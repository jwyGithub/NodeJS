module.exports = {
  local: {
    open: true,
    baseUrl: "localhost",
    mongobaseUrl: "10.11.53.128",
    mongoPort: 27017,
    port: 3000
  },
  http: {
    open: false,
    baseUrl: "s25.natfrp.com",
    mongoPort: 27017,
    port: 8080
  },
  https: {
    open: false,
    port: 443
  }
}