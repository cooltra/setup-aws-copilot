import { fileName, downloadUrl } from "../src/main";
import * as assert from "assert";

describe("main", () => {
  describe("fileName", () => {
    it("generates linux file names", () => {
      assert.equal(
        fileName("1.0", "linux", "arm64"),
        "copilot-linux-arm64-1.0"
      );
    });
    it("generates linux file names", () => {
      assert.equal(fileName("1.0", "linux", "x64"), "copilot-linux-amd64-1.0");
    });
    it("generates osx file names", () => {
      assert.equal(
        fileName("1.0", "darwin", "arm64"),
        "copilot-darwin-arm64-1.0"
      );
    });
    it("generates osx file names", () => {
      assert.equal(
        fileName("1.0", "darwin", "x64"),
        "copilot-darwin-amd64-1.0"
      );
    });
    it("generates windows file names", () => {
      assert.equal(fileName("1.0", "win32", ""), "copilot-windows-1.0.exe");
    });
  });
  describe("downloadUrl", () => {
    it("generates urls for downloading cli", () => {
      assert.equal(
        downloadUrl("1.0", "linux", "arm64"),
        "https://github.com/aws/copilot-cli/releases/download/1.0/copilot-linux-arm64-1.0"
      );
    });
  });
});
