class injection {
	constructor(container) {
		this.injections = []
		this.container = container
	}
	inject(objectClass) {
		var obj = new objectClass()
		for (var i = 0; i < obj.dependencies.length; i++) {
			var dependency = obj.dependencies[i]
			obj[dependency] = this.container.containers[dependency]
		}
		this.injections[obj.constructor.name] = obj
	}
}
module.exports = injection
