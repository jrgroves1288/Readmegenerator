const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('utils/generateMarkdown.js')

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName + '.md', data, error => error ? console.error(error) : console.log(`${fileName + '.md'} generated!`))
}
writeToFile(rmObject.title, await generateMarkdown(rmObject))

inquirer.prompt
        ([
            {
              type: 'input',
              name: 'rmUser',
              message: 'What is your GitHub user name?'
            },
            {
              type: 'input',
              name: 'rmRepo',
              message: 'What is your repository name?'
            },
          {
            type: 'input',
            name: 'inst',
            message: 'What are the installation instructions?'
          },
          {
            type: 'input',
            name: 'use',
            message: 'What is the usage description?'
          },
        
          {
            type: 'input',
            name: 'con',
            message: 'Who are the contributors?'
          },
          {
            type: 'input',
            name: 'test',
            message: 'What are the tests?'
          },
          {
            type: 'input',
            name: 'qs',
            message: 'Any questions?'
          }
        ])
        
      