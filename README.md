# frontend-test-agile-content

A simple project to search for animals and display them in a list. It was developed as a test for **Agile Content**.  
The project was built using NextJS, ReactJS, TypeScript and Cypress. Also it uses CI/CD with GitHub Actions and is deployed on Vercel.

## Run Locally

Clone the project

```bash
  git clone https://github.com/allbertuu/frontend-test-agile-content
```

Go to the project directory

```bash
  cd frontend-test-agile-content
```

Install dependencies

```bash
  npm install # or npm i
```

Start the server

```bash
  npm run dev
```

## Running Tests (Cypress)

To run tests, run the following command

```bash
  npm test
```

## Functional Requirements (what it should do)

### Home page

- A search input that allows you to search for animals.

### Results page

- A search input is displayed in the header to be able to search again.
- When clicking on an item title, additional information will be displayed in a box.
- If no results are found, a message should be displayed.
- If no search term is used, another message should be displayed.

## Business Rules (constraints or guidelines)

- All data is created using [faker.js](https://github.com/faker-js/faker).
- Animals are searched by both title and type.
- The retrieved results will be displayed on the results page.
- All styling has to be done without any external UI library.

### Home page

- Header and footer are just visual elements, they are not interactive.

### Results page

- Images are from random animals, so it’s ok if they don’t match the selected item.
- All retrieved results are displayed as a list.

## Tech Stack

- NextJS
- ReactJS
- TypeScript
- Cypress
- Context API
- CSS Modules

I'm so glad for building this project, I hope you enjoy it! 😄
