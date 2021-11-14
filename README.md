## Volvo test with WebdriverIO

## TODO's

1. Setup the solution with its Dockerized image.
1. Parallel execution of tests
1. Reporting of the results
1. Documentation

## Setup

1. Clone this repo
1. `nvm i && npm i`

## Running it locally

1. Make sure `serivces: ['chromedriver']` is uncommented in `wdio.conf.ts`.
1. `npm run wdio`
1. This will start a Google Chrome browser and execute tests

## Running it locally against Selenium Grid

The Docker compose file sets up a Selenium Grid hub and two Google Chrome nodes.

1. `docker-compose up`
1. Comment out `serivces: ['chromedriver']` is uncommented in `wdio.conf.ts`.
1. Once it's up (you can check this by going to http://localhost:4444), execute tests by running `npm run wdio`.

## Running it all in a Dockerized environment

I would like to get this wokring by also running the tests in a Dockerized environment. I have currently commented out the "Webdriverio" serivce in `docker-compose.yml`. Building and running it gives an error saying it can't connect to the Selenium Grid.

_note_: to build the `webdriverio` service with docker-compose, run `docker-compose up --build`
