module.exports = {
  local: {
    open: false,
    baseUrl: "localhost",
    mongoPort: 27017,
    port: 3000
  },
  http: {
    open: true,
    baseUrl: "wssd.f3322.net",
    mongoPort: 27017,
    port: 80
  },
  https: {
    open: false,
    port: 443
  }
}