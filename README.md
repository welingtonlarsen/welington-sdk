<h1 align="center">
   <b>
        <a href="https://axios-http.com">The Lord of the Rings SDK</a><br>
    </b>
</h1>

<p align="center">The Lord of the Rings SDK is a software development kit that enables developers to consume information about the trilogy through an existing Lord of the Rings API. The SDK is designed to provide a simple and intuitive interface for developers to access movie endpoints using Javascript or Typescript. </p>

## Table of Contents

- [Features](#features)
- [Installing](#installing)
- [Example](#example)
- [Request and Response types](#request-and-response-types)


## Features

- [x] Get all movies
- [x] Get movie
- [x] Get movie quote

## Installing

### Package manager

Using npm:

```bash
$ npm i welington-sdk
```

Using yarn:

```bash
$ yarn add welington-sdk
```

Using pnpm:

```bash
$ pnpm add welington-sdk
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import { getAllMovies, getMovie, getMovieQuote } from "welington-sdk";
```

If you use `require` for importing:

```js
const { getAllMovies, getMovie, getMovieQuote } = require("welington-sdk");
```

## Environment variables
An .env should be set in root with the following variables:
```
API_URL='https://the-one-api.dev/v2'
API_KEY='your-api-key'
```

## API Key
To get an API key, you need to register at `https://the-one-api.dev/sign-up`. After that, you can get your API key.

## Example
```js
import { getAllMovie, getMovie, getMovieQuote } from "welington-sdk";

getAllMovie().then((movies) => {/* handle paginated result containing movies */})
getMovie('movie-id').then((movie) => {/* handle result containing the requested movie */})
getMovieQuote('movie-id').then((quotes) => {/* handle result containing movie quotes */})
```
## Request and Response types
All requests and responses are typed. The following types are used:

### Movie
Represents a `Movie`.
```json5
{
  "id": "movie-id",
  "name": "The Lord of the Rings Series",
  "runtimeInMinutes": 558,
  "budgetInMillions": 281,
  "boxOfficeRevenueInMillions": 2917,
  "academyAwardNominations": 30,
  "academyAwardWins": 17,
  "rottenTomatoesScore": 94
}
```

### Quote
Represents a `Quote`.
```json5
{
  "id": "quote-id",
  "dialog": "Deagol",
  "movieId": "movie-id",
  "characterId": "character-id"
}
```

### PageRequest
Useful for paginated requests. The `page` and `pageSize` properties are optional. If not provided, the default values are `page = 1` and `pageSize = 10`.
```json
{
  "page": 1,
  "pageSize": 10
}
```

### PageResult
Response from paginated requests. All list requests will return a `PageResult` object containing the requested `items`.
```json5
{
  "items": [/*{...}, {...}*/],
  "total": 8,
  "page": 2,
  "pages": 5,
  "offset": 0
}
```

## Testing

### Unit tests

The unit tests execute core logic of the SDK, like the `getAllMovies` function. As its proposal, there is no communication with external dependencies, like the API.

To run the unit tests, execute the following command:

```bash
$ npm run test:unit
```
### Integration tests
The integration tests verify if external dependencies are working as expected. To run it, configure an .env.test file with the following variables:
> **Note** that the .env.test file should be created in the root folder and if possible with pre-prod environment values. Currently, the API does not have a pre-prod environment, so the .env.test file should be configured with the same values as the .env file. But be caution to execute these tests, because they will consume your API requests.
> 
```
API_URL='https://the-one-api.dev/v2'
API_KEY='your-api-key'
```
```bash
$ npm run test:int
```
