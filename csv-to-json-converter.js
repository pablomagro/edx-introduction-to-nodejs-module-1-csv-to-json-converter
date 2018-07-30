// Load needed modules.
const csv = require('csvtojson')
const fs = require('fs')
const path = require('path')

/**
 * Given CSV file passed as parameter, a new JSON file is created with the same name.
 *
 * Note the the file is created synchronously.
 *
 * @example
 *
 * CSV in
 * id,first_name,last_name,email,gender,ip_address,ssn,credit_card,bitcoin,street_address
 * 1,Ario,Noteyoung,anoteyoung0@nhs.uk,Male,99.5.160.227,509-86-9654,5602256742685208,179BsXQkUuC6NKYNsQkdmKQKbMBPmJtEHB,0227 Kropf Court
 * ...
 *
 * JSON out
 * [
 *    {
 *      "id": "1",
 *      "first_name": "Ario",
 *      "last_name": "Noteyoung",
 *      "email": "anoteyoung0@nhs.uk",
 *      "gender": "Male",
 *      "ip_address": "99.5.160.227",
 *      "ssn": "509-86-9654",
 *      "credit_card": "5602256742685208",
 *      "bitcoin": "179BsXQkUuC6NKYNsQkdmKQKbMBPmJtEHB",
 *      "street_address": "0227 Kropf Court"
 *    },
 *    ...
 * ]
 *
 * @param {string} csvFilePath
 */
const convertCsvToJson = async (csvFilePath) => {
  try {
    // Convert to json form csv.
    const jsonArray = await csv().fromFile(csvFilePath);

    // Build the outcome file name.
    const fileName = `${path.basename(csvFilePath, path.extname(csvFilePath))}.json`

    // Generate the outcome JSON file.
    fs.writeFileSync(path.join(__dirname, fileName), JSON.stringify(jsonArray, null, 2))
    console.info('Convert CSV To JSON is done in file "%s".', fileName)
    process.exit(0)
  }
  catch (err) {
    console.error('It was an issue converting the CSV file: "%s".', csvFilePath)
    console.error(err)
    process.exit(1)
  }
}

convertCsvToJson(process.argv[2])