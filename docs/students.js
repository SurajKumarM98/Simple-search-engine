var arrayOfStudents = [];
// the student constructor
function student(firstName,lastName,address) {
    this.id = arrayOfStudents.length + 1;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.address = address;
}

//function to push every student object to an array while declaring.
var studentsArray = (firstName,lastName,address) => {
    var entry = new student(firstName,lastName,address);
    arrayOfStudents.push(entry);
    return entry;
}

let Ajay = studentsArray('Ajaygopal','Jayaprakash','Palakkad');
let Parthi = studentsArray('Parthipan','Panchavendran','Erode');
let suraj = studentsArray('Suraj','Kumar','Coibatore');
let Arjun = studentsArray('Arjun','Jayaprakash','Palakkad');


//function for search engine
let search = (input) => {
    let SearchResult = [];
    //itrate through the arrayOfStudents
    for(let i = 0; i < arrayOfStudents.length; i++) {
        //in each object itrate through the keys
        for(let key in arrayOfStudents[i]) {
            if(arrayOfStudents[i][key] == input) {
                SearchResult.push(arrayOfStudents[i]);
            }
        }
    }
    if(SearchResult.length === 0) {
        return '🚫NOT FOUND🚫';
    }else {
        return SearchResult;
    }
}

//callback function for clickevent on search button
let printSearch = () => {
    console.clear();
    let insert = document.querySelector('.searchbox').value;
    if(insert.length === 0) {
        console.log('⛔Enter Keyword !!⛔');
    }else {
        console.table(search(insert));
    }
}

//for submitting new student datas
document.querySelector('.submit').addEventListener('click',function() {
    let firstName = document.querySelector('.first_name').value;
    let lastName = document.querySelector('.last_name').value;
    let address = document.querySelector('.address').value;
    if(firstName.length !== 0 && lastName.length !== 0 && address.length !== 0) {
        studentsArray(firstName,lastName,address);
        console.clear();
        console.log(`Sumbitted credentials 0f ${firstName} ${lastName}`);
    }else {
        console.clear();
        console.log('Fill all credentials ⚠');
    }
    document.querySelector('.first_name').value = '';
    document.querySelector('.last_name').value = '';
    document.querySelector('.address').value = '';
})

//event of clicking search button
document.querySelector('.search').addEventListener('click',printSearch);

//event of clicking clear button
document.querySelector('.clear').addEventListener('click',function() {
    console.clear();
});

//event of clicking show all button
document.querySelector('.showall').addEventListener('click',function() {
    console.clear();
    console.table(arrayOfStudents);
});
