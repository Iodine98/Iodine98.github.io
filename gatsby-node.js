/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const fs = require("fs")

const buildFolder = "build"

exports.onPreInit = () => {
	if (process.argv[2] === "build") {
		fs.rmdirSync(path.join(__dirname, buildFolder), { recursive: true })
		fs.renameSync(
			path.join(__dirname, "public"),
			path.join(__dirname, "public_dev")
		)
	}
}

exports.onPostBuild = () => {
	fs.renameSync(path.join(__dirname, "public"), path.join(__dirname, buildFolder))
	fs.renameSync(
		path.join(__dirname, "public_dev"),
		path.join(__dirname, "public")
	)
}
