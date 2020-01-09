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
    baseUrl: "wssd.f3322.net",
    mongoPort: 27017,
    port: 80
  },
  https: {
    open: false,
    port: 443
  }
}