// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-bluesvg)`;
  }
  return "";
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license !== "none"){
    return `\n* [License](#license)\n`;
  }
  return "";
}

// function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License 
    Licensed under ${license} license`
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents

* [Description](#description)
* [Usage](#usage)
* [Contact](#contact)
* [Contribution](#contribution)
* [Testing](#testing)
* [Dependencies](#dependencies)
${renderLicenseLink(data.license)}
## Description

${data.description}

## Usage

${data.usage}

## Contact

* Github - [${data.gh}](https://github.com/${data.gh}/)
* Email - ${data.email}

## Contribution

${data.contribution}

## Testing

To run tests, use the following command..

${data.testing}

## Dependencies

To install necessary dependencies run the following command..

${data.installation}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;