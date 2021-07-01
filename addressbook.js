class person{
  _firstName;
  _lastName;
  _address;
  _city;
  _state;
  _zip;
  _phoneNumber;
  _email;
  constructor(firstName, lastName, address,city, state, zip, phoneNumber, email) {  
    this.setFirstName = firstName;
    this.setLastName = lastName;
    this.setAddress=address;
    this.setCity = city;
    this.setState = state;
    this.setZip = zip;
    this.setPhoneNumber = phoneNumber;
    this.setEmail = email;
    }
    get getFirstName(){return this._firstName;}
    /**
     * @param {string} 
     */
    set setFirstName(firstname){
        let Regex=RegExp("^[A-Z]{1}[a-z]{2,}");
        if(Regex.test(firstname)){
            this._firstName=firstname;
        }else{
            throw 'Invalid firstname';
        }
    }
  
    get getLastName() {
        return this._lastName;
    }
    /**
     * @param {string} lastname
     */
    set setLastName(lastname) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(lastNameRegex.test(lastname)){
          this._lastName = lastname;
        }
        else throw 'Invalid Last Name ';
    }
    get getAddress() {
      return this._address;
  }
  /**
   * @param {string} address
   */
  set setAddress(address) {
      let addressRegex = RegExp('[A-Za-z]{4,}$');
      if(addressRegex.test(address))
      this._address = address;
      else throw 'Invalid address';
  }
  
    get getCity() {
        return this._city;
    }
    /**
     * @param {string} city
     */
    set setCity(city) {
        let cityRegex = RegExp('[A-Za-z]{4,}$');
        if(cityRegex.test(city)){
          this._city = city;
        }
        else throw 'Invalid City';
    }
  
    get getState() {
        return this._state;
    }
    /**
     * @param {string} state
     */
    set setState(state) {
        let stateRegex = RegExp('[A-Za-z]{4,}$');
        if(stateRegex.test(state))
        this._state = state;
        else throw 'Invalid State';
    }
  
    get getZip() {
        return this._zip;
    }
    /**
     * @param {string} zip
     */
    set setZip(zip) {
        this._zip = zip;
    }
  
    get getPhoneNumber() {
        return this._phone_number;
    }
    /**
     * @param {string} phoneNumber
     */
    set setPhoneNumber(phoneNumber) {
        let phone_numberRegex = RegExp('((91){1})[ ]([98765]{1})([0-9]{9})$');
        if(phone_numberRegex.test(phoneNumber))
        this._phoneNumber = phoneNumber;
        else throw 'Invalid Phone Number';
    }
  
    get getEmail() {
        return this._email;
    }
    /**
     * @param {string} email
     */
    set setEmail(email) {
        let emailRegex = RegExp('^([a-z0-9\_\.\-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$');
        if(emailRegex.test(email))
        this._email = email;
        else throw 'Invalid Email';
    }
  
    toString() {
        return " \nFirstName : " +this._firstName+ "\nLastName : " +this._lastName +
        "\naddress : "+this._address +
        "\nCity : " +this._city+ "\nState : " +this._state+ "\nZip : " +this._zip+ "\nPhoneNumber : " +this._phoneNumber+ 
        "\nemail : " +this._email;
    }
}
let addressBook = new Array();
addPerson(convertToPerson("Tarun","Gupta","chandini chowk","New Delhi","Delhi","123456","91 9876543210","tarunkumar@gmail.com"));
addPerson(convertToPerson("Praveen","Buggala","gajuwaka","Vizag","Andhra","530012","91 8790677784","praveenasd@gmail.com"))
// updatePerson(3,search("Praveen",1),"palli");
// console.log(search("Kraveen",2));
// var iterator = addressBook.values();
// console.log(iterator.next().value.toString());
// console.log(iterator.next().value.toString());
// addressbookFilterOperations(1);
const prompt = require('prompt-sync')();
function convertToPerson(firstName, lastName, address,city, state, zip, phoneNumber, email){
    return new person(firstName, lastName, address,city, state, zip, phoneNumber, email);
}
function addPerson(person){
  if(!search(person.getFirstName,2))
    addressBook.push(person);
}

function search(firstname,option){
  switch(Number(option)){
  case 1:
    return addressBook.findIndex(person => person.getFirstName == firstname);
  case 2:
    if(typeof addressBook.find(person=> person.getFirstName == firstname) != 'undefined')
      return true;
    else
      return false;
  }
}

function updatePerson(option,index,value){
  let updateperson = addressBook[index];
  switch(Number(option)){
    case 1:
      updateperson.setFirstName = value;
      break;
    case 2:
      updateperson.setLastName = value;
      break;
    case 3:
      updateperson._address = value;
      break;
    case 4:
      updateperson.setCity = value;
      break;
    case 5:
      updateperson.setState = value;
      break;
    case 6:
      updateperson.setZip = value;
      break;
    case 7:
      updateperson.setPhoneNumber = value;
      break;
    case 8:
      updateperson.setEmail = value;
      break;
  }
}

function deletePerson(index){
  if(search(person.getFirstName,2)){
    addressBook.splice(index,1);
    console.log("successfully deleted");
  }
  else
    console.log("person doesn't exist");
}

function addressbookFilterOperations(option,value){
  switch(Number(option)){
    case 1:// to find number of contacts
      console.log(addressBook.length);
      break;
    case 2: // person in a city
      console.log(addressBook.filter(person1 => person1.getCity==value));
      break;
    case 3: // person in state
      console.log(addressBook.filter(person1 => person1.getState==value));
      break;
    case 4: // count in city
      console.log(addressBook.filter(person1 => person1.getCity==value).reduce(count,0));
      break;
    case 5:// count by state
      console.log(addressBook.filter(person1 => person1.getState==value).reduce(count,0));
      break;
  }
}
function sort(option){
  switch(Number(option)){
    case 1:
      console.log(addressBook.sort((person1,person2) => person1.getFirstName.toLowerCase().localeCompare(person2.getFirstName.toLowerCase())));
      break;
    case 2:
      console.log(addressBook.sort((person1,person2) => person1.getCity.toLowerCase().localeCompare(person2.getCity.toLowerCase())));
      break;
    case 3:
      console.log(addressBook.sort((person1,person2) => person1.getState.toLowerCase().localeCompare(person2.getState.toLowerCase())));
      break;
  }
}

function menu1(){
  console.log("1. add new contact\n2. update contact\n3. delete contact\n4.get count\n"+
              "5. get contact by city\n6. get contact by state\n7. count by city\n8.count by state\n"+
              "9. sort by name\n10. sort by city\n11. sort by state\n12. exit"
  );
  let option = prompt("enter the option");
  switch(Number(option)){
    case 1:
      addPerson(convertToPerson(prompt("enter first name"),prompt("enter last name"),
      prompt("enter address"),prompt("enter city"),prompt("enter state"),prompt("enter zip"),
      prompt("enter phone number"),prompt("enter email")));
      return true;
    case 2:
      console.log("1. first name\n2. last name\n3. address\n4. city\n5. state\n6. zip\n7. phone number\n8. email")
      updatePerson(prompt("enter the option"),search(prompt("enter contact person first name"),1),prompt("enter new value"));
      return true;
    case 3:
      deletePerson(search(prompt("enter contact first name"),1));
      return true;
    case 4:
      addressbookFilterOperations(1);
      return true;
    case 5:
      addressbookFilterOperations(2,prompt("enter the city"));
      return true;
    case 6:
      addressbookFilterOperations(3,prompt("enter the state"));
      return true;
    case 7:
      addressbookFilterOperations(4,prompt("enter the city"));
      return true;
    case 8:
      addressbookFilterOperations(5,prompt("enter the state"));
      return true;
    case 9:
      sort(1);
      return true;
    case 10:
      sort(2);
      return true;
    case 11:
      sort(3);
      return true;
    case 12:
      return false;
  }
}
while(menu1()){}
