module.exports = class TestPlugin {
  onload() {
    console.log("Test Plugin geladen!");
  }

  onunload() {
    console.log("Test Plugin entladen!");
  }
};
