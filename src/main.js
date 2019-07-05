import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
const DoctorLookup = require('./doctorlookup.js');
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(document).ready(function() {
  $('#myInfo').submit(function(event) {
    event.preventDefault();
    const inputQuery = $('#symptom').val();
    let service = new DoctorLookup;
    let promise = service.DoctorList();

// ~~~~~~~~ for promise logic ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    promise.then(function (response) {
      let apiData = JSON.parse(response);
      console.log(apiData.data[0]);
      console.log(apiData.data[0].profile);
      console.log(apiData.data[0].profile.first_name); // <---- this gives first name of doctor!
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
