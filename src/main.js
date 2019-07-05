import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
const DoctorLookup = require('./doctorlookup.js');
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(document).ready(function() {
  $('#myInfo').submit(function(event) {
    event.preventDefault();
    let inputQuery = $('#symptom').val();
    $('#symptom').val("")
    let service = new DoctorLookup;
    let promise = service.DoctorList();

// ~~~~~~~~ for promise logic ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    promise.then(function (response) {
      let apiData = JSON.parse(response);
      let doctorLists = [];
      apiData.data.forEach(function (name) {
        let firstName = name.profile.first_name;
        let lastName = name.profile.last_name;
        let street2 = name.practices[0].visit_address.street2;
        let street = name.practices[0].visit_address.street;
        let city = name.practices[0].visit_address.city;
        let state = name.practices[0].visit_address.state;
        let zip = name.practices[0].visit_address.zip;
        let phone = name.practices[0].phones[0].number;
        let accept = name.practices[0].accepts_new_patients;
        console.log(firstName + lastName);
        console.log(street2 + street + city + state + zip);
        console.log(phone + accept);

        // apiData.data.practices.forEach(function (info) {
        //   let address = `${practice.visit_address.street}, ${info.visit_address.city} ${info.visit_address.state}, ${info.visit_address.zip}
        //     \n${info.visit_address.street}`;
        // });
        // console.log(apiData.data[0].practices[0].visit_address.city);
        // console.log(apiData.data[0].practices[0].visit_address.street);
        // console.log(apiData.data[0].practices[0].visit_address.street2);
        // console.log(apiData.data[0].practices[0].visit_address.zip);
        // console.log(apiData.data[0].practices[0].visit_address.state);
        // console.log(apiData.data[0].practices[0].accepts_new_patients);
        // console.log(apiData.data[0].practices[0].phones[0].number);
        // let address = name.practices.visit_address.street2 + name.practices.visit_address.street + name.practices.visit_address.city + name.practices.visit_address.state + name.practices.visit_address.zip;
        // let phone = name.practices.phones.number;
        // let accept = name.practices.accepts_new_patients;
        // doctorLists.push(firstName, lastName, address, phone, website, accept);
        // console.log(doctorLists);
      });

    }, function (error) {
      $('#doctors').text('Sorry, we cannot find Doctor for you...');
    });
// ~~~~~~~~ for promise logic ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  });
});

// console.log(apiData.data);
// console.log(apiData.data[0]);
// console.log(apiData.data[0].profile);
// console.log(apiData.data[0].profile.first_name); // <---- this gives first name of doctor!
// console.log(apiData.data[0].profile.last_name); // <---- this gives last name of doctor!
// console.log(apiData.data[0].practices[0].accepts_new_patients); // <---- this gives an information about acceptance of patients!
// console.log(Object.keys(apiData));
// console.log(Object.keys(apiData.data)); // <------ number of doctors in query
// console.log(Object.keys(apiData.data.profile)); // <------ number of doctors in query

// const getElements = function(response) {
  //   console.log(`${response}`)
  //   console.log(`${response[0]}`)
  //   $('#result').text(`${response.data[0].profile}`);
  // }
  // });
