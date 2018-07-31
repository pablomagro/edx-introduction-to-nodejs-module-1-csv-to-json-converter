# edx: Introduction to NodeJS

## Module 1 Assignment Lab: CSV to JSON Converter

1. Walk us through the design of your project. Why did you design your project the way you did? What difficulties did you overcome?

    My design is pretty much simple, there is a function which read a second argument from the command line using async/await. As suggested I have used the **[csvtojson](https://www.npmjs.com/package/csvtojson)** library to convert a given CSV file to a JSON file with the same name of the given file.

2. How did you test your project to verify that it works?

    As is not required I haven't included the unit test for this functionality using e.g.: mocha, we should include it in a production environment. As I am using VSCode I have a luncher for testing node apps and then check its result and verify the outcome file.
    
## Test it

Run below commands to test the program:

```bash
# Clone the repo
git clone https://github.com/pablomagro/edx-introduction-to-nodejs-module-1-csv-to-json-converter.git

# Move the downloaded repo folder.
cd edx-introduction-to-nodejs-module-1-csv-to-json-converter

# Install dependencies.
npm install

# Test the program.
node csv-to-json-converter.js customer-data.csv
```



