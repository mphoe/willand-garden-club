# GardenClub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Docker investigation

### Development image

Run `docker build -t garden-club:dev .` to use ./Dockerfile to create an image called garden-club:dev

Run `docker run -d -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --name devContainer --rm garden-club:dev` to run the image as a container named "devContainer", exposing port 4201

You can then test the container by running `docker exec -it devContainer ng test --watch=false`
and `docker exec -it devContainer ng e2e --port 4202`
