// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
     ${data.description}
## Table of Contents
     ${data.tableofcontents}
## Installation
     ${data.installation}
## Usage
     ${data.usage}
## License
     https://img.shields.io/badge/license-${data.license}-blue.svg
     
## Contributing
     ${data.contributing}
## Test Instructions
     ${data.tests}
## Questions
     ${data.questions}
`;
}

function gitHubLink(data) {
     return `www.${data}.com`
}
module.exports = generateMarkdown;
