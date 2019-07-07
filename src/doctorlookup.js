class DoctorLookup{
  DoctorList(firstname, lastname, inputQuery) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = "";
      if (firstname === "" && lastname === "" && inputQuery === "") {
        url = `https://api.betterdoctor.com/2016-03-01/doctors?&location=45.523%2C%20-122.676%2C100&user_location=45.523%2C%20-122.676&user_key=${process.env.apiKey}`; // <----- use `` rather than '' to enclose https information
      }
      if (firstname === "" && lastname === "" && inputQuery !== "") {
        url = `https://api.betterdoctor.com/2016-03-01/doctors?&query=${inputQuery}&location=45.523%2C%20-122.676%2C100&user_location=45.523%2C%20-122.676&user_key=${process.env.apiKey}`; // <----- use `` rather than '' to enclose https information
      }
      if (firstname !== "" && lastname !== "" && inputQuery === "") {
        url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstname}&last_name=${lastname}&location=45.523%2C%20-122.676%2C100&user_location=45.523%2C%20-122.676&user_key=${process.env.apiKey}`; // <----- use `` rather than '' to enclose https information
      }
      // const url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstname}&last_name=${lastname}&query=${inputQuery}&location=45.523%2C%20-122.676%2C100&user_location=45.523%2C%20-122.676&skip=0&limit=10&user_key=${process.env.apiKey}`; // <----- use `` rather than '' to enclose https information

      // const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.523064%2C%20-122.676483%2C100&user_location=portland&skip=0&limit=10&user_key=ffe395fbf97c561b518013a794f3aba9=${process.env.apiKey}`; // <-- test for error in API query by promise
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
module.exports = DoctorLookup;
