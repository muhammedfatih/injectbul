class container {
	constructor(config) {
		var containers = {}

		config.forEach(function(item) {
			var interfaceName = item.interfaceName
			var interfacePath = item.interfacePath
			var implementPath = item.implementPath

			var interfaceClass = require.main.require(interfacePath)
			var interfaceq = new interfaceClass()
			var implementClass = require.main.require(implementPath)
			var implement = new implementClass()
			interfaceq.instance(implement)
			containers[interfaceName] = interfaceq
		})

		this.containers = containers
		this.bind()
	}
	bind() {
		var keys = Object.keys(this.containers)
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i]
			if (typeof this.containers[key].dependencies() !== "undefined") {
				var dependencies = this.containers[key].dependencies()
				for (var j = 0; j < dependencies.length; j++) {
					var dependency = dependencies[j]
					this.containers[key]["instance"][
						dependency
					] = this.containers[dependency]
				}
			}
		}
	}
}
module.exports = container
