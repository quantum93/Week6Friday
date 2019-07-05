class DoctorLookup{
  DoctorList(userInput) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=${userInput}&location=45.523%2C%20-122.676%2C100&user_location=45.523%2C%20-122.676&skip=0&limit=2&user_key=ffe395fbf97c561b518013a794f3aba9';
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        }else {
          reject(Error(request.statusText));
        }
      };

      request.open("GET", url, true);
      request.send();
    });
  }
}
module.exports = DoctorLookup;
