# NavpiFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Development Setup - DOCKER
Make sure you have docker installed, and are in the NavPi JS directory. This image will auto reload

####Build the image: 
`docker build -f dev.Dockerfile -t navpi-js-dev .`

####Run the container:
`docker run -it -p 4200:4200 -v ${pwd}:/app navpi-js-dev`

Please note: The –v volume mapping means that changes on the host and these are immediately available inside the Docker container. Open [http://localhost:4200](http://localhost:4200) 

####Install the dependencies: 
`./dev-prep.sh`

## Development Process - DOCKER
####Run the container: 
If the container is not running then start it

`docker run -it -p 4200:4200 -v ${pwd}:/app navpi-js-dev`

####Start the server
`./dev-start.sh`

The site will be avaible on [http://localhost:4200](http://localhost:4200)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
