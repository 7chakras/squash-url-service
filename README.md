# squash-url-service [![Build status](https://dev.azure.com/7chakras/squash-url-service/_apis/build/status/squash-url-service%20-%20CI)](https://dev.azure.com/7chakras/squash-url-service/_build/latest?definitionId=1)

This service squashes urls similar to bit.ly and other shortners

The service is deployed in Azure app service . The service uses Azure devops for achieving CI/CD lifecycle. Below are the relevant links to this project

## Production Url - Swagger

https://squash-url-service.azurewebsites.net/docs/swagger/

## CI pipeline

https://dev.azure.com/7chakras/squash-url-service/_build?definitionId=1

## Unit Test Summary

https://dev.azure.com/7chakras/squash-url-service/_build/results?buildId=14&view=ms.vss-test-web.build-test-results-tab

## Release pipeline

https://dev.azure.com/7chakras/squash-url-service/_release?view=mine&definitionId=1

## Development

### Getting Started

1. npm install or yarn install
2. npm run start:dev or yarn start:dev
3. npm run lint:fix or yarn run lint:fix
4. npm run test or yarn run test

## Testing

1. Option 1

   You can use the swagger page to generate the squashed url which you can navigate to

2. Option 2

   Step 1

   curl -X POST "https://squash-url-service.azurewebsites.net/api/squash-url" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"url\": \"http://www.bit.ly\"}"

   Expected response

```json
{
  "response": {
    "data": {
      "url": "http://www.bit.ly",
      "squashedUrl": "https://squash-url-service.azurewebsites.net/IYCBVEyQ"
    }
  }
}
```

    Step 2
    Navigate to the squashedUrl received in response
    https://squash-url-service.azurewebsites.net/IYCBVEyQ
