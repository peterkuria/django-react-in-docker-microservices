# This is a Django, Frontend with React in Docker/nginx/ Kubernetes cluster

This project serves as an example of a deployment frontend (ReactJS) and backend (Django) using docker and nginx.

## How to run

Make sure you have [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed and run

```shell
docker-compose up
```

## Want to use this project?

1. Fork/Clone/ or start afresh from local PC/ MAC

```sh
mkdir django-react-in-docker-microservices && cd django-react-in-docker-microservices
mkdir backend && cd backend

```

1. Create and activate a virtualenv environment: I prefer to use **_pipenv_**

```sh
pipenv --three && pipenv shell

```

## start development: add dependencies

1. Install the requirements using pipenv : Django and djangorestframework, aloe-django

```sh
(backend) $ django-admin startproject backend . && cd backend

(backend) $ pipenv install Django && pipenv install djangorestframework && pipenv install aloe-django
(backend) $ python manage.py migrate
(backend) $ python manage.py startapp

```

Next add our **_backend_** app to the **INSTALLED_APPS** settings in our settings.py file.

## Git and CI Quick setup: I prefer to start working locally and push to github. On PC:

```sh
# navigate to the root folder and initialize a git tracking. You can create a local branch
$ cd ..
$ cd ..
$ git init && git commit -am "initial commit"

# alternatively in one step
$ git init
$ $ git commit -am "initial commit"
```

## Add and Commit changes

**_git -am "message"_**

```sh
$ echo README.md

$ git commit -am "added and committed READme.md"

# or push an existing repository from the command line
$ git remote add origin git@github.com:peterkuria/django-react-in-docker-microservices.git

# You should disable email privacy to enable push
$ git push origin master
```

## Run the tests

```sh
$ cd django-react-in-docker-microservices
$ python manage.py harvest
```

## Create and configure your local database

## Merge the new branch with your master branch

PULL the changes into the production folder
Deploy 1.

## Frontend React APP

We’re using React in this tutorial but our backend doesn’t care what frontend framework is used to consume our Todo list API.

We are going to easily bootstrap our app with [create-react-app](https://github.com/facebook/create-react-app).

Open up a new command line console so there are now two consoles open. Leave our existing backend open and still running our local server for our DRF API.

In the new console install create-react-app globally with the following command.

\$ yarn add global create-react-app

Navigate to the root directory and

```sh

$ cd ~/django-react-in-docker-microservices
$ cd frontend
# bootstrap your react app with create-react-app
# npx create-react-app my-app
$ yarn create react-app frontend

Success! Created frontend at ~\django-react-in-docker-microservices\frontend\frontend
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd frontend
  yarn start

Happy hacking!
Done in 368.18s.

```

We can now run our React app with the command yarn start.

\$ yarn start

Update this App.js file.

Our /api endpoint is in JSON. Your file will look like this:

```JSON
[
  {
    "id":1,
    "title":"To do App",
    "description":"Learn DRF."
  },
  {
    "id":2,
    "title":"continue working on M-PESA API forked repo",
    "description":"M-MPESA/stripe payment gateways has revolutionized the way many send and receive money - don't be left behind"
  },
  {
    "id":3,
    "title":"Next create a Django + Graphql React API",
    "description":"Graphql data CRUD operations with python Django rocks"
  }
]
```

We can mock that up in our React app in a variable list, load that list into our state, and then use map() to display all the items. Here’s the code.

```javascript
// App.js
import React, { Component } from "react"

const list = [
	{
		id: 1,
		title: "1st Item",
		description: "Description here."
	},
	{
		id: 2,
		title: "2nd Item",
		description: "Another description here."
	},
	{
		id: 3,
		title: "3rd Item",
		description: "Third description here."
	}
]

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { list }
	}

	render() {
		return (
			<div>
				{this.state.list.map(item => (
					<div>
						<h1>{item.title}</h1>
						<span>{item.description}</span>
					</div>
				))}
			</div>
		)
	}
}

export default App
```

## Add your Nginx

```shell
upstream api {
    server backend:8000;
}

server {
    listen 8080;
    location /test/ {
        proxy_pass http://api$request_uri;
    }

    location /api/ {
        proxy_pass http://api$request_uri;
    }

    location /static/rest_framework/ {
        proxy_pass http://api$request_uri;
    }

    # ignore cache frontend
    location ~* (service-worker\.js)$ {
        add_header 'Cache-Control' 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
        expires off;
        proxy_no_cache 1;
    }

    location / {
      root /var/www/frontend;
      try_files $uri $uri/ /index.html;
    }

}

```
