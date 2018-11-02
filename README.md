To install and run the application:

1. Create a folder for the source code.
2. Open Git Bush, go to the folder location and write the following command to download the code
	git clone https://github.com/poteaa/MoneyExchangeFront.git
3. In Git Bush go to MoneyExchangeFront and write the following command to install the packages
	npm install
4. go to src/environments/environments.ts and change the baseUrl for the backend endpoint in case it has changed
5. run the following command to start the application using the cli
	ng serve
6. Log in at the application:
	user: diego
	password: 123
	

# MoneyExchange

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
