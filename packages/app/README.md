# `app`

> This is a example of App Engine application deploy with packages from a different repository than npm, like `GitHub Package Registry`.

## Usage

You need a `.npmrc` file with the configuration for the new registry, something like:

```
//npm.pkg.github.com/:_authToken=<token>
@santima10:registry=https://npm.pkg.github.com/santima10
```
