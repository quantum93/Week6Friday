# Week6Friday Independent Project

#### Doctor Lookup. 7/5/2019

#### By **Tae Lee**

## Description
 Finding a doctor that provides the services you need nearby can be time consuming. To facilitate this, we create a website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in your city (Portland or Seattle depending on where you are) who can treat their medical issue.

### Specs
| Spec.                                                   | Input                       | Output                             |
| :------------------------------------------------------ | :-------------------------- | :--------------------------------- |
| A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.|
| :------------------------------------------------------ | :-------------------------- | :--------------------------------- |
| getting API key from BetterDoctor API and saving it .env files                                                             |
| basic html writing for input and output style.                                                                             |
| basic user interface logic writing in main.js                                                                              |
| basic bundling test wit webpack                                                                                            |
| first test with very basic information from API                                                                            |
| get error message "Cannot POST /index.html"                                                                                |
| test with detail query for API                                                                                             |
| console.log(`${response}`) --> [object Object]                                                                             |
| API Doctor search with portland lat & log info.                                                                            |
| API Doctor search with portland lat & log info.  ----> get undefined                                                       |
| split user interface and business logic first ----> still doesn't work                                                     |
| something works but still not enough ....                                                                                  |
| it gives result for fixed input rather than user input.                                                                    |
| it give first name of doctor finally in the Portland area                                                                  |
| :------------------------------------------------------ | :-------------------------- | :--------------------------------- |
| If the query response includes any doctors, the following information should be included about each doctor: first name,    |
| last name, address, phone number, website and whether or not the doctor is accepting new patients                          |
| (the API provides this data).                                                                                              |
| :------------------------------------------------------ | :-------------------------- | :--------------------------------- |
| console.log test for first, last name, address, phone number, and new patients ....                                        |
| 
| :------------------------------------------------------ | :-------------------------- | :--------------------------------- |
| :------------------------------------------------------ | :-------------------------- | :--------------------------------- |
| A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.      |
| :------------------------------------------------------ | :-------------------------- | :--------------------------------- |
| :------------------------------------------------------ | :-------------------------- | :--------------------------------- |
| If the API call results in an error (any message not a 200 OK), the application should return a notification that states   |
| what the error is.                                                                                                         |
| :------------------------------------------------------ | :-------------------------- | :--------------------------------- |
| If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application  |
| should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled  |
| separately from any errors.)                                                                                               |
| :------------------------------------------------------ | :-------------------------- | :--------------------------------- |

## Setup/Installation Requirements

1. To run this program, clone repository from this GitHub.
2. run command at terminal (npm install)
3. run command at terminal (npm run start)
4. recommend Google Chrome for web browser.

## Known Bugs
* No known bugs at this time.

## Technologies Used
  * HTML
  * CSS (bootstrap 3.3.7 which is available in https://getbootstrap.com/docs/3.3/)
  * Javascript
  * jQuery-3.4.1 (https://jquery.com/download/)
  * bootstrap .4.3.1
  * babel
  * jest
  * eslint
  * webpack 4.19.1
  * html, uglifyjs, clean-webpack plugins
  * API key

## Support and contact details

If there are any questions, bugs or concerns, please contact taebumlee@gmail.com

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2019 **Tae Lee**
