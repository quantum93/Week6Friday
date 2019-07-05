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
        let website = name.profile.img_url;
        doctorLists.push(firstName, lastName);
        console.log(doctorLists);
      });
      let doctorInfo = [];
      apiData.data.forEach(function (practice) {
        let 
      });
      console.log(apiData.data[0].practices[0].visit_address.city);
      console.log(apiData.data[0].practices[0].visit_address.street);
      console.log(apiData.data[0].practices[0].visit_address.street2);
      console.log(apiData.data[0].practices[0].visit_address.zip);
      console.log(apiData.data[0].practices[0].visit_address.state);
      console.log(apiData.data[0].practices[0].phones.number);
      console.log(apiData.data[0].practices[0].accepts_new_patients);

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
