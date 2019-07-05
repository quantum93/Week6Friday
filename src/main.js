import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';

$(document).ready(function () {
  $('#myInfo').submit(function () {
    let request = new XMLHttpRequest();
    const url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=ffe395fbf97c561b518013a794f3aba9'
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      let date = new Date(); //date in milliseconds
      let oneWeekBefore = date - 604000000;
      let result = [];
      for (let i = 0; i < 99; i++) {
        // ${response.bikes[i].date_stolen} in API is seconds not milliseconds and so need to 1000 times
        if (parseInt(`${response.bikes[i].date_stolen}`)*1000 > oneWeekBefore) {
          result.push(`${response.bikes[i].title}`);
        }
        $('#result').text("The model of " + result + " " + result.length + " bikes are stolen around portland area at last week!");
      }
    };

  });
});
