## Volvo test with WebdriverIO

## TODO's

- [x] Setup the solution with its Dockerized image.
- [x] Parallel execution of tests (by adjusting `maxInstances` in `wdio.conf.ts`)
- [ ] Reporting of the results
- [ ] Documentation

## Setup

1. Clone this repo
1. `nvm i && npm i`

## Running it locally

1. Run `npm run wdio`
1. This will start a Google Chrome browser and execute tests

## Running it locally against Selenium Grid

Starta Selenium Grid hub and two Google Chrome nodes.

1. `docker-compose up selenium-hub chrome`
1. Once it's up (you can check this by going to http://localhost:4444), execute tests by running `USE_GRID=true npm run wdio`.

## Running it all in a Dockerized environment

If you run this for the first time, you need to build the "webdriverio" service image by running `docker-compose up --build`. This will build the "webdriverio" service and start executing tests, all in a Dockerized environment.

Shut down all services by running `docker-compose down`.
