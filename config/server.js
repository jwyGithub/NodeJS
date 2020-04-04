module.exports = {
  local: {
    open: true,
    baseUrl: "localhost",
    mongobaseUrl: "jwycloud.xyz",
    mongoPort: 27017,
    port: 3001
  },
  http: {
    open: false,
    baseUrl: "jwycloud.xyz",
    mongoPort: 27017,
    port: 3001
  },
  https: {
    open: false,
    port: 443
  }
}