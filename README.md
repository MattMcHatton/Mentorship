# Matt McHatton Mentorship
For the mentorship we followed this tutorial on Medium: [Serverless Testing Strategies](https://medium.com/@didil/serverless-testing-strategies-393bffb0eef8).

This repository illustrates some strategies to test apps built using [Serverless framework](https://github.com/serverless/serverless).

We reviewed the code to get a better understanding of how serverless functions work but also how to create reasonable tests for simple functions.

We decided to customize the function from the tutorial to add additional functionality to the serverless function and the associated tests.

Added Functionality :
- Allow for 3 inputs to asyncConcat service
    - Criteria: Can accept 3 inputs but does not need 3
        - a: string
        - b: string
        - c: boolean
- SpOnGeBoBiFy 
    - Criteria: Every other letter is set to uppercase if c is true

## Setup

- Install Node 8.10 (latest runtime supported by AWS Lambda)

- Install serverless (tested against serverless v1.28.0)
````
$ npm i -g serverless 
````
- Install node modules
````
$ npm i 
````
- Initialize env variables file
````
$ touch env.yml 
````
- Run tests
````
$ npm test
````

## Running locally
- Start serverless offline
````
$ sls offline
````
- Send an http request with [httpie](https://httpie.org/)
````
$ http :3000/asyncConcat a==foo b==bar

HTTP/1.1 200 OK
Connection: keep-alive
Date: Mon, 16 Jul 2018 12:20:24 GMT
Transfer-Encoding: chunked
access-control-allow-credentials: true
access-control-allow-origin: *
cache-control: no-cache
content-encoding: gzip
content-type: application/json; charset=utf-8
vary: origin,accept-encoding

{
    "result": "foo bar"
}

