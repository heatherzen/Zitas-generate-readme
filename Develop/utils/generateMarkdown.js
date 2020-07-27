// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License](https://img.shields.io/badge/license-${data.badge}-blue.svg)

## Description
     ${data.description}
## Table of Contents
* [Installation](#installation)
* [Questions](#questions)
## Installation
     ${data.installation}
## Usage
     ${data.usage}
## License
     ${data.license}
## Contributing
     ${data.contributing}
## Test Instructions
     ${data.tests}
## Questions
     ${data.questions}
`;
}

module.exports = generateMarkdown;
