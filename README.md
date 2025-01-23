<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://logos-world.net/wp-content/uploads/2022/12/Stripe-Emblem.png" width="200px" alt="Nest Logo" /></a>
  
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


# stripe-adapter

## Introduction:

Use this NestJS microsservice in your project so you can start receiving payments using Stripe Payment Gateway.


- [🔍 Introduction](#introduction)
- [✨ Features](#features)
- [✨ Advantages of using a adapter](#advantages-of-using-a-adapter)
- [🛠 Install and running ](#install-and-running)
- [📄 License](#license)

---

## Features:

```
=== User Features
* Create Customer 
* Create Payment Intent
* Confirm Payment Intent

=== Adapter related
- Console and File Logging Middleware (.log)
- Healthcheck for depedencies and infrastructure tools
```

## Advantages of using a adapter

There are many reasons why you should user a adapter such as `stripe-adapter`.

- **Flexibility and decoupling**: if you later need to change your payment gateway for a new one (lets say if you have a problem with Stripe) you can easily **decouple** features as you want.
- **Easier to test, add and fix integrations**.
- **Security improvements** with: **external data flow control**, addition of **numerous validation layers** and **credential handling centralization**.
- **Easily treat payment errors which are not under your control** with custom treatment.


## Install and running

### Install dependencies

```bash
$ pnpm install
```

### Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

### Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## License

This project is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
