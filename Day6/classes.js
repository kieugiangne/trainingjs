class Tuoi {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  
  let date = new Date();
  let year = date.getFullYear();
  
  let myTuoi = new Tuoi("Giang", 2002);
  document.getElementById("demo").innerHTML=
  "Số tuổi của t là  " + myTuoi.age(year) + " tuổi";