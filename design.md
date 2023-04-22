<h1 align="center">
   <b>
        <a href="https://axios-http.com">SDK Design</a><br>
    </b>
</h1>
<p align="center">The Lord of the Rings SDK is designed to be simple and easy to use, with the goal of abstracting away the complexity 
of the underlying API. The SDK provides a set of classes and methods that developers can use to interact with the movie endpoints. </p>


## High-level Architecture
The Lord of the Rings SDK follows a layered architecture pattern that separates concerns and provides a clear separation of responsibilities. 
The architecture is composed of three layers:

- Data Access Layer: Responsible for interacting with the Lord of the Rings API endpoints and fetching data from them.
- Business Logic Layer: Responsible for performing any necessary data manipulation and processing, as well as providing a simplified interface for developers to interact with the SDK.
- Presentation Layer: This is the layer where the SDK user interacts with the SDK, through the functions exported by the SDK.

## Low-level Architecture
The SDK was built using concepts from Hexagonal Architecture, which is a software architecture style that aims to create loosely coupled application 
components that can be easily connected to their software environment by means of ports and adapters.
Using this architecture, it is easy to change external dependencies, like the data source (The Lord of the Rings API) and the HTTP client (axios).
Another important concept, is to make it easy to test the codebase, maintain it and create new features.

## Testing
Two kinds of tests were implemented: unit tests and integration tests. Unit tests are used to test the core logic of the application, 
and integration tests are used to test the integration with external dependencies, like with The Lord of the Rings API,
checking if the API is running as expected.

## Entrypoint
The entrypoint of the SDK is the `index.ts` file, which exports the functions that can be used by the user of the SDK. Inside the `index.ts` file,
dependencies are injected into the functions, like the HTTP client. This is done to make it easy to change the dependencies and implement new features.

## Typescript
Typescript was used to make the SDK more robust, and to make it easier to maintain and extend the codebase. Typescript also helps to make the code more readable.

## Linting and formatting
ESLint and Prettier were used to make the code more readable and to avoid errors. The code is formatted automatically 
through commands `lint:fix` and `lint:fix`. It could be implemented in a pre-commit hook, to make sure the code is formatted before committing it.
