function validateData(){
	var imeValidirano = provjeraImena();
	var prezimeValidirano = provjeraPrezimena();	
	var dobValidirano = provjeraDOB();
	var spolValidirano = provjeraSpol();

	if (imeValidirano && prezimeValidirano && dobValidirano && spolValidirano ){
		return true;
	}else{
		return false;
    }   
}


function provjeraImena(){
    var ime = document.getElementById('name').value;
	if (ime == "" || ime == null){
		document.getElementById('name').style.border = '1px solid red';
		document.getElementById('error_name').innerHTML = 'You have to write your name!';
		return false;		
	}else{
		document.getElementById('name').style.border = '1px solid #a7a7a7';
		document.getElementById('error_name').innerHTML = '';
		return ime;
	}
}

function provjeraPrezimena(){
    var prezime = document.getElementById('surname').value;
	if (prezime == "" || prezime == null){
		document.getElementById('surname').style.border = '1px solid red';
		document.getElementById('error_surname').innerHTML = 'You have to write your surname!';
		return false;		
	}else{
		document.getElementById('surname').style.border = '1px solid #a7a7a7';
		document.getElementById('error_surname').innerHTML = '';
		return prezime;
	}
}

function provjeraDOB(){
    var dob = document.getElementById('dob').value;
	if (dob == "" || dob == null){
		document.getElementById('dob').style.border = '1px solid red';
		document.getElementById('error_dob').innerHTML = 'Choose your date of birth.';
		return false;		
	}else{
		document.getElementById('dob').style.border = '1px solid #a7a7a7';
		document.getElementById('error_dob').innerHTML = '';
		return dob;
	}
}

function provjeraSpol(){
	var spol = "";
	var spolLength = document.formOne.gender.length;

	for (var i = 0; i < spolLength; i++) {
			if (document.formOne.gender[i].checked){
				spol = document.formOne.gender[i].value;
				break;
			}
		}	
	
	if (spol == "" || spol == null){
		document.getElementById('error_gender').innerHTML = 'Choose gender';
		return false;		
	}else{
		document.getElementById('error_gender').innerHTML = '';
		return spol;
	}
}

function resetForm(){
    document.getElementById('name').value="";
    document.getElementById('surname').value = "";
    document.getElementById('dob').value= "";

    var spolLength = document.formOne.gender.length;
	for (var i = 0; i < spolLength; i++) {
			if (document.formOne.gender[i].checked){
				document.formOne.gender[i].value = "";
				break;
            }
    }
}	





function showAndHide() { 
    var search = document.getElementById("search"); 
    if (search.style.display === 'inline-block') { 
        search.style.display = 'none'; 
    } 
    else{ 
        search.style.display = 'inline-block'; 
    }    
} 
	
