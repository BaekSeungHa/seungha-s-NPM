const fs = require("fs");

function main() {
  const source = fs.readFileSync(__dirname + "/package.json").toString("utf-8");
  const sourceObj = JSON.parse(source);
  sourceObj.scripts = {};
  sourceObj.devDependencies = {};
  if (sourceObj.main.startsWith("/build/")) {
    sourceObj.main = sourceObj.main.slice(5);
  }
  fs.writeFileSync(
    __dirname + "/build/package.json",
    Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8")
  );
  fs.writeFileSync(
    __dirname + "/build/version.txt",
    Buffer.from(sourceObj.version, "utf-8")
  );

}

main();
