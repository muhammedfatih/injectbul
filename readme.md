# injectbul

**Dependency Injection for NodeJS**

## 1. Introduction

injectbul helps you implement basic dependency injection to your pure nodejs code. Unlike other packages, you don't need to any framework.

Currently, it only supports Singleton lifestyle.

Project's primary target is helping anyone who used object oriented langues with dependency injection.

## 2. Dependencies

Project doesn't have any dependencies to any other packages.

## 3. Installation

```
npm i injectbul
```

## 4. Usage

injectbul requires an interface and an implementation of that interface.

Interface class should extends from `iinterface` class which comes with injectbul package.

Interface and implementation class should have identical methods.

Interface class method template should be as shown below:

```
var injectbul = require("injectbul")
class iistanbul extends injectbul.iinterface {
	eyup() {
		return this.instance.eyup()
	}
	cekmekoy() {
		return this.instance.cekmekoy()
	}
	sisli() {
		return this.instance.sisli()
	}
}
module.exports = iistanbul
```

Injections are defined in a config object. Config object template is as shown below:

```
var config = [
	{
		interfaceName: "iistanbul",
		interfacePath: "./services/cities/iistanbul",
		implementPath: "./services/cities/istanbul"
	},
	{
		interfaceName: "iedirne",
		interfacePath: "./services/cities/iedirne",
		implementPath: "./services/cities/edirne"
	}
]
```

These injections are stored in `containers.container` variable which comes with injectbul package.

Whenever a class need an injection, it must be defined with a template below:

```
var injectbul = new injectbul.injectbul(config)
injectbul.inject(cityControllerClass)
```
