import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(document).ready(function() {
  $('#myInfo').click(function(event) {
    event.preventDefault();
    // const city = $('#location').val();
    // $('#location').val("");

    let request = new XMLHttpRequest();
    // const url = `http://api.openweathermap.org/data/2.5/weather?q=portland&appid=139c7807f6c3124d87752fde4386359e`;
    const url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=ffe395fbf97c561b518013a794f3aba9';

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
     console.log(`${response}`)
      // $('#result').text(`${response}`);
    }
  });
});
