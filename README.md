This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Uruchamienia projektu

Do uruchomienia projektu będzie potrzebny:
- Node.js
- npm lub yarn

Będą w projekcie uzywamy komendy `yarn` lub `npm install`.
Czekamy na koniec instalacji i uruchamiamy komende `yarn start` lub ` yarn build`.
Apka w pierwszym przypadku otworzy się w dev mode, a w drugim wygeneruje się folder `build`, w którym trzeba otworzyć plik `index.html`.

## Własna tabela

W Projekcie znajduje się tabelka, mona dodać swoją poprzez:
- Dodanie swoich zmockowanych danych do `utils/mockData.ts`. Wymagane jest aby klucze w kadym obiekcie odpowiadały `slug` w utworzonej strukturze,
na koniec import w App.
- Storzenie struktury tabelki na przykładzie `utils/constants/patientStructure`. Kazdy obiekt symbolizuje kolumnę, wymagana nazwa,
slug i jej szerokość. Slug musi pokrywać się ze slugami ze zmockowanych danych.
- Utworzenie interface'u dla własnych danych, lub wyciszenie typescripta poprzez `@ts-ingore`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
