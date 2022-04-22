const { all } = require("../../db/select/artistes")

module.exports = function (app, client) {
	app.get("/artistes", (req, res) => {
		all(client, req, res)
		client.end
	})
}
