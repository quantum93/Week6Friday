import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
const DoctorLookup = require('./doctorlookup.js');
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(document).ready(function() {
  $('#myInfo').submit(function(event) {
    event.preventDefault();
    const query = $('#symptom').val();
    let service = new DoctorList;
    // const city = $('#location').val();
    // $('#location').val("");

    const getElements = function(response) {
      console.log(`${response}`)
      console.log(`${response[0]}`)

      // console.log(`${response.data}`)
      // console.log(`${response.data[0]}`)
      // console.log(`${response.data[0][0]}`)
      // console.log(`${response.data[1]}`)

      $('#result').text(`${response.data[0].profile}`);
    }
  });
});
