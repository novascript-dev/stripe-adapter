<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://logos-world.net/wp-content/uploads/2022/12/Stripe-Emblem.png" width="200px" alt="Nest Logo" /></a>
  
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

**Use this NestJS microsservice in your project so you can start receiving payments using Stripe**. 

Currently, the following features are implemented:

- Create a customer
- Create a Payment Intent
- Confirm a Payment Intent

## Install setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

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
