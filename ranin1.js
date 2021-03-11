var students = [];

document.getElementById('submit').addEventListener('click', () => {
    let x = 20;
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gdpaInputEl = document.getElementById('gdpa');

	// Validation for input
	inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// insert student
	insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// Show success message
	showMessage('success');

    
});

function inputValidation(name, id, gdpa) {
 
    let x = 30;

	if (name == '') {
		alert('Please insert the student name');
	}

	if (id == '') {
		alert('Please insert the student id number');
	}

	if (gdpa == '') {
		alert('Please insert the student gdpa');
	}
}

function insertStudent(Name, Id, Gdpa) {
	let student = {
		name: Name,
		id: Id,
		gdpa: Gdpa,
	};
	students.push(student);
    console.log('students array: ', students);
}

function showMessage(event){
    if (event == 'success') {
        alert('Studnet added!')
    }else{
        alert('Faild to add student')
    }
}


function Showlist(){


	var n = '';
    for (var j in students) {
        var student = [];

        for (var i in students[j]) {
            student.push(i + ': ' + students[j][j]);
        }

        n += "<li>" + student.join('<br>') + "</li> <br>";
    }

	document.getElementById("names").style.display = 'block';
	document.getElementById("names").innerHTML = "<ol>" + n + "</ol>";
}


function Deletestudent() {

	var d = document.getElementById("delete").value;

	for(var j in students) {

		if(students[j]["id"] == d){
		 students.splice(j,1);
		 alert("deleted done");
		 return;	
	    }   	
    } 
  alert("student dose not fonded ");
}
 
var ii = -1;
function check(){
	let r = document.getElementById("pdate").value;

	for(var j in students) {
		if(students[j]["id"] == r){	 
		 ii = j;
		 document.getElementById("showlist").style.display = 'block';
		 return;	
		}
    }
	alert("student is not Found");
    ii = -1;
}

function Update() {
	let name = document.getElementById('UpName').value;
	let id = document.getElementById('UpdateId').value;
	let gdpa = document.getElementById('UpGdpa').value;

   if(ii != -1){

    if(name != '')
	students[ii]["name"] = name;

	if(id != '')
	students[ii]["id"] = id;

	if(gdpa != '')
	students[ii]["gdpa"] = gdpa;
    alert(" Update done");
   }
  
}