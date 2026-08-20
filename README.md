# My Cypress Automation

This project uses Cypress to automate web application testing scenarios.

The project was developed as part of my QA studies, with a focus on functional testing and test automation.

## Test Scenarios

The following scenarios were automated:

* Login with valid credentials
* Login with invalid credentials
* User information update
* Validation of expected application behavior

## Technologies

* Cypress
* JavaScript
* Node.js
* Chance.js

## Project Structure

```text
cypress/
├── e2e/
├── fixtures/
├── pages/
└── support/

cypress.config.js
package.json
README.md
```

## Installation

Node.js is required to run this project.

Install the project dependencies:

```bash
npm install
```

## Running the Tests

To open the Cypress interface:

```bash
npx cypress open
```

To run the tests in the command line:

```bash
npx cypress run
```

## Project Goal

The goal of this project was to practice QA concepts and test automation by creating functional test scenarios and using Cypress to execute and validate tests in a web application.

