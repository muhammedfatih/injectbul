class injectbul {
	constructor(config) {
		var container = require("./container")
		var container = new container(config)
		this.container = container

		var injection = require("./injection")
		var injection = new injection(container)
		this.injection = injection
	}
	inject(name) {
		this.injection.inject(name)
		return this
	}
	get(name) {
		return this.injection.injections[name]
	}
}
module.exports = injectbul
