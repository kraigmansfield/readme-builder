const inquirer = require(`inquirer`)
const fs = require('fs')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'userTitle',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project.',
      name: 'userDesc',
    },
    {
      type: 'input',
      message: 'Are there any installation steps?',
      name: 'userInstall',
    },
    {
      type: 'input',
      message: 'Please provide an example of use.',
      name: 'userUse',
    },
    {
      type: 'input',
      message: 'Do you have anyone to credit?',
      name: 'userCredit',
    },
    {
      type: 'input',
      message: 'Do you have any licenses?',
      name: 'userLicense',
    },
    
  ])
  .then((response) => {
    fs.writeFile(`${response.userTitle}`,
    `## Project Title
    ${response.userTitle}
    
    ## Description
    ${response.userDesc}
    
    ## Installation
    ${response.userInstall}
    
    ## Usage
    ${response.userUse}
    
    ## Credits
    ${response.userCredit}
    
    ## License
    ${response.userLicense}`,(err) => {
        if (err) {
            throw err
        }
    })
  })