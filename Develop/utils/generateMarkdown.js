// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License](https://img.shields.io/badge/license-${data.badge}-blue.svg)

## Description
     ${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
     ${data.installation}
## Usage
     ${data.usage}
## License
     ${data.license}
## Contributing
     ${data.contributing}
## Tests
     ${data.tests}
## Questions
     ${data.questions}


     If you have any additional questions, please contact me by email.
     ${data.email}

     GitHub username: ${data.username}
     [Check out Heather's GitHub, click here.](https://www.github.com/${data.username})
`;
}

module.exports = generateMarkdown;
