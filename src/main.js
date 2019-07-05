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
    console.log(inputQuery);
    let service = new DoctorLookup;
    let promise = service.DoctorList();
    console.log(promise);

// ~~~~~~~~ for promise logic ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    promise.then(function (response) {
      let apiData = JSON.parse(response);
      console.log(apiData.data[0]);
      console.log(apiData.data[0].profile);
      console.log(apiData.data[0].profile.first_name); // <---- this gives first name of doctor!
      console.log(apiData.data[0].profile.last_name); // <---- this gives last name of doctor!
      console.log(apiData.data[0].practices[0].accepts_new_patients); // <---- this gives an information about acceptance of patients!
      console.log(apiData.data[0].practices[0].visit_address); // <---- this gives an information about address!
      console.log(Object.keys(apiData));
      console.log(Object.keys(apiData.data)); // <------ number of doctors in query
      console.log(Object.keys(apiData.data.profile)); // <------ number of doctors in query 
    }, function (error) {
      $('#doctors').text('Sorry, we cannot find Doctor for you...');
    });
// ~~~~~~~~ for promise logic ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  });
});




// const getElements = function(response) {
  //   console.log(`${response}`)
  //   console.log(`${response[0]}`)
  //   $('#result').text(`${response.data[0].profile}`);
  // }
  // });
