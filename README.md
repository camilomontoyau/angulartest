# Angular test

### It uses
  - ExpressJS v4.13.4
  - Mongoose v4.4.3
  - node-restful v0.2.5
  - node v4.3.1
 

### Installation

```sh
$ git clone https://github.com/kerosine9/angulartest.git
$ cd testapp
$ npm install
```

### Configuration
Go to server/config/index.js and ...

```js
module.exports={
	mongodbConnection:'mongodb://localhost/qualit',//change this for your mongo config
	jwtSecret:'super-secret-token' //Change this for any random string
	//other config vars must be here
}
```

### Run
Go to app folder and then run
```sh
$ node server/app.js
```
Then open the browser in http://localhost:9000

Then go to authors tab and create many.

Then go to books tab and create as many as you want.

