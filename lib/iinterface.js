class iinterface {
	instance(instance) {
		this.instance = instance
	}
	dependencies() {
		return this.instance.dependencies
	}
}
module.exports = iinterface
