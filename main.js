const { Plugin } = require("obsidian");

module.exports = class TestPlugin extends Plugin {
  onload() {
    console.log("Test-Plugin erfolgreich geladen!");
  }

  onunload() {
    console.log("Test-Plugin wurde entladen.");
  }
};
