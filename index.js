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
      message: 'Please provide a table of contents.',
      name: 'userToc',
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
        type: 'list',
        message: 'Do you have any licenses?',
        name: 'userLicense',
        choices: ["MIT", "Apache", "Creative Commons"]
    },
    {
      type: 'input',
      message: 'Do you have anyone to credit?',
      name: 'userCredit',
    },
    {
      type: 'input',
      message: 'Do you have tests set up?',
      name: 'userTest',
    },
    {
      type: 'input',
      message: 'What is your GitHub URL?',
      name: 'userGit',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn URL?',
      name: 'userLink',
    },
    
  ])
  .then((response) => {
    fs.writeFile(`${response.userTitle}.md`,
`# Project Title
${response.userTitle}
    
## Description
${response.userDesc}
    
## Table of Contents
${response.userToc}

## Installation
${response.userInstall}
    
## Usage
${response.userUse}
    
## License
${response.userLicense}
    
## Credit
${response.userCredit}
    
## Tests
${response.userTest}
    
## Questions
Github:https://github.com/${response.userGit}
LinkedIn:https://www.linkedin.com/in/${response.userLink}
`,(err) => {
        if (err) {
            throw err
        }
    })
  })