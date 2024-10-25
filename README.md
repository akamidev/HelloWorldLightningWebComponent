# Hello World Lightning Web Component 🚀⚡

[![Salesforce](https://img.shields.io/badge/Salesforce-Apex-blue?logo=salesforce&style=flat-square)](https://developer.salesforce.com) 
[![LWC](https://img.shields.io/badge/Lightning%20Web%20Components-Framework-yellow?style=flat-square&logo=javascript)](https://developer.salesforce.com/docs/component-library/documentation/en/lwc) 
[![GitHub issues](https://img.shields.io/github/issues/akamidev/HelloWorldLightningWebComponent?style=flat-square)](https://github.com/akamidev/HelloWorldLightningWebComponent/issues)

This project demonstrates the creation of a simple **Hello World** Lightning Web Component (LWC) using Salesforce DX. This component displays a greeting message and allows users to change the greeting dynamically through an input field.

## 🎯 Features
- **Dynamic Greeting**: Users can change the greeting text in real-time.
- **Customizable Component**: The LWC is configured for Home, Record, and App pages.
- **API Version 58.0**: The project is developed using the latest Lightning Component APIs.

## 🛠️ Project Structure
```bash
📦 HelloWorldLightningWebComponent/
 ┣ 📂 force-app/main/default/lwc/helloWorld
 ┃ ┣ 📜 helloWorld.html      # HTML template for the component
 ┃ ┣ 📜 helloWorld.js        # JavaScript logic for the component
 ┃ ┗ 📜 helloWorld.js-meta.xml # Component metadata file
 ┣ 📂 scripts                # Useful scripts
 ┣ 📂 config                 # Configuration files for Salesforce DX
 ┣ 📜 README.md              # Project documentation
 ┣ 📜 sfdx-project.json      # Salesforce DX project configuration
 ┗ 📜 package.json           # Node.js dependencies for the project
