# initial setup when creating this repo
```
npm install cypress --save-dev
```

# setup after cloning this repo
```
npm install
```

# start the test runner 
```
npx cypress open
```

# run all tests
```
npx cypress run
```

# run all tests in a single spec file headless
```
npx cypress run --spec "cypress/e2e/login_locators.js"
```

# run all the feature files headless
```
npx cypress run --spec "cypress/e2e/**/*.feature"
```
# run all tests in a single spec file headless with browser chrome
```
npx cypress run --spec "cypress/e2e/login_locators.js --headed --browser chrome"
```

# run all the feature files headless with browser chrome`
```
npx cypress run --spec "cypress/e2e/login_locators.js --headed --browser chrome"
```

# run all tests by tags 
```
npx cypress run --env tags="@Regression" --headed --browser chrome
```

# run all tests in cypress cloud ex. 
```
npx cypress run --spec cypress npx cypress run --record --key a24ad739-9e52-495c-9468-ad905acc104c --spec cypress/e2e/login_locators.js --headed --browser chrome   
```

# record tests
```
cypress run –record –key
```