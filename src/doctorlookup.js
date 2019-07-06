class DoctorLookup{
  DoctorList(inputQuery) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${inputQuery}&location=45.523%2C%20-122.676%2C100&user_location=45.523%2C%20-122.676&skip=0&limit=10&user_key=${process.env.apiKey}`; // <----- use `` rather than '' to enclose https information 
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
