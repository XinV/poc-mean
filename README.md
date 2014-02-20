 MEAN +  SOCKET.io (www.mean.io y socket.io)



Instructions
============

Clone the repository

	git clone git@github.com:cleondz/poc-mean.git


## Prerequisitos
* Node.js - Download and Install [Node.js](http://www.nodejs.org/download/). You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm


### Tools Prerequisites
* NPM - Node.js package manager, should be installed when you install node.js.
* Bower - Web package manager, installing [Bower](http://bower.io/) is simple when you have npm:

```
$ npm install -g bower
```

### Optional
* Grunt - Download and Install [Grunt](http://gruntjs.com).


## Quick Install
  The quickest way to get started with MEAN is to clone the project and utilize it like this:

  Install dependencies:

    $ npm install

  Set Twitter API consumer/access keys:

	$ vi app/controllers/twitter.js

		var twit = new twitter({
		  consumer_key: 'consumer_key',
		  consumer_secret: 'consumer_secret',
		  access_token_key: 'access_token_key',
		  access_token_secret: 'access_token_secret'
		});


  We recommend using [Grunt](https://github.com/gruntjs/grunt-cli) to start the server:

    $ grunt
    
  Then open a browser and go to:

    http://localhost:3000