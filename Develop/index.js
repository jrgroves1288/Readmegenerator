const inquirer = require("inquirer");
const fs = require('fs');


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
        ]).then(answer)
        fs.writeFile("readme.md", , function(err) {

          if (err) {
            return console.log(err);
          }
        
          console.log("Success!");
        
        });
        