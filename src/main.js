import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
const DoctorLookup = require('./doctorlookup.js');
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(document).ready(function() {
  $('#myInfo').submit(function(event) {
    event.preventDefault();
    let inputFirstName = $('#firstname').val();
    $('#firstname').val("")
    let inputlLastName = $('#lastname').val();
    $('#lastname').val("")
    let inputQuery = $('#symptom').val();
    $('#symptom').val("")
    let service = new DoctorLookup;
    let promise = service.DoctorList(inputFirstName, inputlLastName, inputQuery);

// ~~~~~~~~ for promise logic ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    promise.then(function (response) {
      let apiDoctors = JSON.parse(response);
      apiDoctors.data.forEach(function (name) {
        // doesn't match anything means the length of data is zero.
        if (name.length === 0) {
          $('#doctors').append('Sorry, no doctors for this search and please try again');
        }
        // if not, we try to catch the data from API
        let firstName = name.profile.first_name;
        let lastName = name.profile.last_name;
        // let street2 = name.practices[0].visit_address.street2;
        let street = name.practices[0].visit_address.street;
        let city = name.practices[0].visit_address.city;
        let state = name.practices[0].visit_address.state;
        let zip = name.practices[0].visit_address.zip;

        let phone = name.practices[0].phones[0].number;
        let accept = name.practices[0].accepts_new_patients;
        let website = name.profile.image_url;
        $('#doctors').append(firstName + " " + lastName + ": " + street + ", " + city + ", " + state + ", " + zip + " Tel.: " + phone + "</br>");
      });
    }, function (error) {
      $('#doctors').text('Sorry, there is an error to process...');  // <---- this is for error of process by promise function.
    });
// ~~~~~~~~ for promise logic ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  });
});
// console.log(firstName + lastName);
// console.log(website);
// console.log(street + city + state + zip);
// console.log(phone + accept);

// apiDoctors.data.practices.forEach(function (info) {
  //   let address = `${practice.visit_address.street}, ${info.visit_address.city} ${info.visit_address.state}, ${info.visit_address.zip}
  //     \n${info.visit_address.street}`;
  // });
  // console.log(apiDoctors.data[0].practices[0].visit_address.city);
  // console.log(apiDoctors.data[0].practices[0].visit_address.street);
  // console.log(apiDoctors.data[0].practices[0].visit_address.street2);
  // console.log(apiDoctors.data[0].practices[0].visit_address.zip);
  // console.log(apiDoctors.data[0].practices[0].visit_address.state);
  // console.log(apiDoctors.data[0].practices[0].accepts_new_patients);
  // console.log(apiDoctors.data[0].practices[0].phones[0].number);
  // let address = name.practices.visit_address.street2 + name.practices.visit_address.street + name.practices.visit_address.city + name.practices.visit_address.state + name.practices.visit_address.zip;
  // let phone = name.practices.phones.number;
  // let accept = name.practices.accepts_new_patients;
  // doctorLists.push(firstName, lastName, address, phone, website, accept);
  // console.log(doctorLists);

// console.log(apiDoctors.data);
// console.log(apiDoctors.data[0]);
// console.log(apiDoctors.data[0].profile);
// console.log(apiDoctors.data[0].profile.first_name); // <---- this gives first name of doctor!
// console.log(apiDoctors.data[0].profile.last_name); // <---- this gives last name of doctor!
// console.log(apiDoctors.data[0].practices[0].accepts_new_patients); // <---- this gives an information about acceptance of patients!
// console.log(Object.keys(apiDoctors));
// console.log(Object.keys(apiDoctors.data)); // <------ number of doctors in query
// console.log(Object.keys(apiDoctors.data.profile)); // <------ number of doctors in query

// const getElements = function(response) {
  //   console.log(`${response}`)
  //   console.log(`${response[0]}`)
  //   $('#result').text(`${response.data[0].profile}`);
  // }
  // });
