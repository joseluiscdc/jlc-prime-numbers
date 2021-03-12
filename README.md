## jlc-prime-numbers app

The node.js app for calculate prime numbers.

## Requirements

- Node 12
- Jest

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/joseluiscdc/jlc-prime-numbers.git
cd jlc-prime-numbers
```

```bash
npm install
```

## Steps for use access api

```bash
npm run start
```

## Steps for use whit Docker

```bash
docker pull joseluiscdc/jlc-prime-numbers:api
docker run -d --name api-app -p 3000:3000 joseluiscdc/jlc-prime-numbers:api
```
