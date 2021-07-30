Task 3  21/07/21


1)
    var obj = [
          { person: "Name 1", age: "2", company: "GUVI" },
          { person: "Name 2", age: "5", company: "GUVI geek" },
          { person: "Name 3", age: "8", company: "GUVI geek network" },
        ]
    use the above JSON to iterate over all for loops (for, for in, for of, forEach)
    
      for (i = 0; i<obj.length; i++) {
    console.log(obj[i]);
  
  }
  for(let key in obj){
    console.log(obj[key]);
  }
  for(key of obj){
    console.log(key);
  }
  obj.forEach(key=>console.log(key));
  
  2) Create your own resume data in JSON format?
  
  "basics": {
    "name": "Gopinath",
    "label": "Engineer",
    "picture": " Nan",
    "email": "gopimano4242@gmail.com",
    "phone": "638062****",
 
    "summary": " xyz "},
    "location": {
      "address": "Chennai",
      "postalCode": "600***",
      "city": "Chennai",
      "countryCode": "India",
      "region": "TN"
    },"education": [{
    "institution": "University",
    "area": "Civil Engineer",
    "studyType": "Bachelor",
    "startDate": "2014-01-01",
    "endDate": "2018-01-01",
    "gpa": "6025",
    "courses": [
      "Fullstack","cadd"
    ]
  }]}
  
  /*3) Read about the difference between window, screen and document in javascript?
  
**Window is the execution context and global object for that context's JavaScript
**Document contains the DOM, initialized by parsing HTML
**Screen describes the physical display's full screen

4)Codekata practice

Done*/
  
