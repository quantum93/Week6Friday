class DoctorLookup{
  let request = new XMLHttpRequest();
  const url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=sore%20throat&location=45.523%2C%20-122.676%2C100&user_location=45.523%2C%20-122.676&skip=0&limit=2&user_key=ffe395fbf97c561b518013a794f3aba9';

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  }

  request.open("GET", url, true);
  request.send();
}
module.exports = DoctorList;
