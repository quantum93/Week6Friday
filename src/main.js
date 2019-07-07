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
    console.log(typeof inputFirstName);
    $('#firstname').val("");
    let inputlLastName = $('#lastname').val();
    console.log(typeof inputlLastName);
    $('#lastname').val("");
    let inputQuery = $('#symptom').val();
    console.log(inputQuery);
    $('#symptom').val("");
    let service = new DoctorLookup;
    let promise = service.DoctorList(inputFirstName, inputlLastName, inputQuery);

// ~~~~~~~~ for promise logic ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    promise.then(function (response) {
      let apiDoctors = JSON.parse(response);
      console.log(typeof apiDoctors.meta.total);
      if (apiDoctors.meta.total === 0) { // <----- number of doctor in API is the metal.total not in data
        $('#doctors').append('Sorry, no doctors for this search and please try again');
      }
      apiDoctors.data.forEach(function (name) {
        let doctorName = name.profile.first_name + " " + name.profile.last_name;
        let doctorAddress = "";
        if (name.practices[0].visit_address.street2 !== undefined) {
          doctorAddress = name.practices[0].visit_address.street2 + " " + name.practices[0].visit_address.street + " " + name.practices[0].visit_address.city + " " + name.practices[0].visit_address.state + " " + name.practices[0].visit_address.zip
        } else {
          doctorAddress = name.practices[0].visit_address.street + " " + name.practices[0].visit_address.city + " " + name.practices[0].visit_address.state + " " + name.practices[0].visit_address.zip
        }
        let phone = name.practices[0].phones[0].number;
        let website = name.profile.image_url;
        let reservation = "";
        if (name.practices[0].accepts_new_patients === true) {
          reservation = ':available doctor for appointment';
        } else {
          reservation = ":not available doctor for appointment"
        }
        $('#doctors').append(doctorName + ": " + doctorAddress + " Tel.: " + phone + " " + reservation + " " + website + "</br>");
      });
    }, function (error) {
      $('#doctors').text('Sorry, there is an error to process...');  // <---- this is for error of process by promise function.
    });
// ~~~~~~~~ for promise logic ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  });
});
