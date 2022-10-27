# Exam Portal UI 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

`npm start`

## Using Docker 
##### Build a docker image
`docker build -t <image-name> -f Dockerfile`
##### Run a docker image
`docker run -d -p 3000:3000 --name <image-name>`

##### Docker parameters

`-v  : add volume to your conatiner. eg. -v %cd%\src:/app/src`

`-e  : add environment variable. eg. -e ENV_VAR_NAME=value`

- to bind project source with a conatainer in windows OS we need to add an enviroment variable. `-e CHOKIDAR_USEPOLLING=true`

- add Read Only mode so container could not make any change to local directory. `-e CHOKIDAR_USEPOLLING=true:ro`

- add environment variable file
`--env-file <file-name>`

##### remove a docker container
`docker rm <container-name|id> -f`


