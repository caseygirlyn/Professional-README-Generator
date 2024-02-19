// function to generate markdown for README
function generateMarkdown(data) {
  let license = (data.license !== "None") ? `This project is licensed under the [${data.license} License](LICENSE).` : `${data.license}`;
  let badge = '';
  switch (data.license) {
    case 'MIT':
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)`;
      break;
    case 'APACHE 2.0':
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=for-the-badge)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GPL 3.0':
      badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    default:
      break;
  }

  return `
# ${data.project}
${badge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`\`
${data.cmdInstall}
\`\`\`\`

Clone using the web URL.
\`\`\`\`
https://github.com/caseygirlyn/Professional-README-Generator.git
\`\`\`\`
Use a password-protected SSH key.
\`\`\`\`
git clone git@github.com:caseygirlyn/Professional-README-Generator.git
\`\`\`\`
Work fast with official CLI.
\`\`\`\`
gh repo clone caseygirlyn/Professional-README-Generator
\`\`\`\`

## Usage
${data.useRepo}

## License
${license}

## Contributing
${data.contribution}

## Tests
\`\`\`\`
${data.cmdTest}
\`\`\`\`


## Questions
Follow me on Github at https://github.com/${data.username}.

Feel free to reach out to me for any inquiries at [${data.email}](mailto:${data.email}).

[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/caseygirlyn)
[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
`;
}

module.exports = generateMarkdown;