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
     GitHub username: ${data.username}
     <www.github.com/${data.username}>
     ${data.questions}
     If you have any additional question, please contact me by email.
     ${data.email}
`;
}

module.exports = generateMarkdown;
