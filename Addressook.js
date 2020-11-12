class AddressBookData{

    //constructor
    constructor(...args){
        this.fName=args[0];
        this.lName=args[1];
        this.address=args[2];
        this.city=args[3];
        this.state=args[4];
        this.zip=args[5];
        this.phNo=args[6];
        this.email=args[7];
    }

    //getter and setter method
    get fName() {return this._fName;}
    set fName(fName){
        const regexFName = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(regexFName.test(fName)){
            this._fName=fName;
        }
        else
            throw "Invalid First Name";
    }
    get lName() {return this._lName;}
    set lName(lName){
        const regexLName = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(regexLName.test(lName))
            this._lName=lName;
        else
            throw "Invalid Last Name";    
    }
    get address(){
        return this._address;
    }
    set address(address){
        const regexAddress = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(regexAddress.test(address)){
           this._address = address;
        }
        else
            throw "Invalid Address";    
    }

    get city(){
        return this._city;
    }
    set city(city){
        const regexCity = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(regexCity.test(city))
            this._city = city;
        else
            throw "Invalid City";
    }

    get state(){
        return this._state;
    }
    set state(state){
        const regexState = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(regexState.test(state))
            this._state = state;
        else
            throw "Invalid State";
    }
    
    get zip(){
        return this._zip;
    }
    set zip(zip){
        const regexZip = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
        if(regexZip.test(zip))
            this._zip = zip;
        else
            throw "Invalid ZipCode";    
    }
    
    get phNo(){
        return this._phNo;
    }
    set phNo(phNo){
        const regexPhNo = RegExp("^[0-9]{2}[ ]{1}[0-9]{10}$");
        if(regexPhNo.test(phNo))
            this._phNo = phNo
        else
            throw "Invalid Phone No";    
    }

    get email(){
        return this._email
    }
    set email(email){
        const regexEmail = RegExp("^([a-z]){1,}[a-z0-9]*([.+_-]){0,1}[0-9a-z]+(@){1}([0-9a-z]+)(\\.([a-z]){2,}){1}(\\.[a-z]{2,})?$")
        if(regexEmail.test(email))
            this._email = email;
        else
            throw "Invalid Email";    

    }

    //method
    toString(){
        return "FirstName = " + this.fName + ", LastName = " + this.lName + ", Address = " + this.address + ", City = " + this.city + ", State = " + this.state + ", Zipcode = " + this.zip + ", PhoneNo = " + this.phNo + ", Email = " + this.email
    }
}
function checkExists(fName, lName){
    let contactDetails;
    addressBookArray.forEach(contact => {
        if(contact.fName == fName && contact.lName == lName){
            contactDetails = contact;
        }
    });
    return contactDetails;
}

//Edit Contact
let addressBookArray = new Array()
function editDetails(fName,lName){
    let contact = checkExists(fName,lName);
    if(contact === undefined){
        console.log("No such Contact")
        return;
    }
    else{
        console.log("1. Edit Firstname");
        console.log("2. Edit Lastname");
        console.log("3.Edit address");
        console.log("4.Edit city");
        console.log("5.Edit state");
        console.log("6.Edit zip");
        console.log("7.Edit phone number");
        console.log("8.Edit email");
        const prompt = require("prompt-sync")();
        let option = parseInt(prompt("Choose a num : "));
        switch(option){
            case 1:
                fName = prompt("Enter Updated Firstname");
                contact.fName = fName;
                break;

            case 2:
                lName = prompt("Enter Updated Lastname");
                contact.lName = lName;
                break;
                
            case 3:
                address = prompt("Enter Updated address");
                contact.address = address;
                break;

            case 4:
                city = prompt("Enter Updated city");
                contact.city = city;
                break;
                
            case 5:
                state = prompt("Enter Updated state");
                contact.state = state;
                break;
                
            case 6:
                zip = prompt("Enter Updated zip");
                contact.zip = zip;
                break;

            case 7:
                phNo = prompt("Enter Updated PhoneNo");
                contact.phNo = phNo;
                break;
                
             case 8:
                email = prompt("Enter Updated Email");
                contact.email = email;
                break;
                
                default:
                    console.log("Not valid");

        }
    }
}

function deleteContact(fName,lName){
    let contact = checkExists(fName,lName);
    if(contact === undefined){
        console.log("No such Contact")
        return;
    }
    else{
        for(i=0;i<addressBookArray.length;i++){
            if(addressBookArray[i].fName == fName && addressBookArray[i].lName == lName && i<addressBookArray.length-1){
                addressBookArray.splice(i,1);
                return;
            }
            else if(addressBookArray[i].fName == fName && addressBookArray[i].lName == lName && i==addressBookArray.length-1){
                addressBookArray.pop();
            }
        }
    }
}

function getCount(){
    return addressBookArray.reduce(count=> count+1,0);
}

try{
let addressBookData0 = new AddressBookData("Mehakjit", "Singh", "Streetabc", "Patiala", "Punjab", "147001", "91 9999999999", "mehak@gmail.com")
let addressBookData1 = new AddressBookData("Test", "Test", "Streetabc", "Testcity", "Testsate", "151001", "91 9999999998", "test@gmail.com");
let addressBookData2 = new AddressBookData("Testfirst", "Testfirst", "Streetabcd", "Testcityfirst", "Testsatefirst", "151002", "91 9999999997", "test1@gmail.com");
addressBookArray.push(addressBookData0);
addressBookArray.push(addressBookData1);
addressBookArray.push(addressBookData2);
}
catch(e){
    console.log(e);
}
console.log(addressBookArray);
editDetails("Test","Test");
deleteContact("Test","Test");
console.log("after deletion")
console.log(addressBookArray);
console.log("Total contacts: " + getCount())