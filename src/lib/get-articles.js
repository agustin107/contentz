const fs = require("fs");
const globby = require("globby");
const { promisify } = require("util");

// import updatedFiles from "./updated-files";

const regex = ["./articles/**/*.mdx"];
const readFile = promisify(fs.readFile);

async function readArticles() {
  const paths = await globby(regex);
  // const updated = await updatedFiles();
  // filter somehow
  return await Promise.all(
    paths.map(async path => ({
      content: await readFile(path, "utf8"),
      path
    }))
  );
}

module.exports = readArticles;
