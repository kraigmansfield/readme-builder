# Project Title
readme-builder

## Description
Every project neds a quality README, with information about the application itself. This includes informatin such as: what the app is for, how to use the app and how to install the it. This project is a CLI(Command Line Interface) application that runs with Node.js and dynamically creates a README.md file based on the users input.

## Table of Contents
N/A

## Installation
To generate your own README, git clone the repo to your local machine. First run "npm init" to initiate the installation. Next run "npm install" in order to get the correct dependencies in the package.json. Next install inquirer buy using "npm install inquirer@8.2.4" to get the necessary version of inquirer for the prompts.

The application will being after opening the "index.js" file with the integrated terminal. Enter in "node index.js" to begin the application.

Answer the prompts in the CLI to generate the README.

## Usage
When you run "node index.js", the application will prompt the user with a series of questions about their project. The application will take the responses and generate a markdown file based on those inputs. 

fs.writeFile is used to generate the markdown file.

## License
N/A

## Credit
Joe Rehfuss

## Questions
Github:https://github.com/kraig.mansfield
LinkedIn:https://www.linkedin.com/in/kraig-mansfield