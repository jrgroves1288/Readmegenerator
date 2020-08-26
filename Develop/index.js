const inquirer = require("inquirer");
const fs = require('fs');


inquirer.prompt
        ([
            {
              type: 'input',
              name: 'Username',
              message: 'What is your GitHub user name?'
            },
            {
              type: 'input',
              name: 'Repository',
              message: 'What is your repository name?'
            },
          {
            type: 'input',
            name: 'instructions',
            message: 'What are the installation instructions?'
          },
          {
            type: 'input',
            name: 'description',
            message: 'What is the usage description?'
          },
        
          {
            type: 'input',
            name: 'contribute',
            message: 'Who are the contributors?'
          },
          {
            type: 'input',
            name: 'test',
            message: 'What are the tests?'
          },
          {
            type: 'input',
            name: 'questions',
            message: 'Any questions?'
          }
        ]).then(answer)
        fs.writeFile("readme.md", , function(err) {

          if (err) {
            return console.log(err);
          }
        
          console.log("Success!");
        
        });
        