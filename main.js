(function(){
	var navigation_li = document.querySelectorAll('nav li');
	for (var i = 0; i < navigation_li.length; i++) {
		if(navigation_li[i].className != 'dropdown'){
			navigation_li[i].onclick = function(){
				document.getElementById('nav-trigger').checked = false;
				document.querySelectorAll('.dropdown ul')[0].style.maxHeight = '0px';

			};
		} 
	}

	function Accordion(){
		if (document.querySelectorAll('.dropdown ul')[0].style.maxHeight == '200px' ){
		document.querySelectorAll('.dropdown ul')[0].style.maxHeight = '0px';
		}
		else{
		document.querySelectorAll('.dropdown ul')[0].style.maxHeight = "200px";
		}
	}
	document.querySelectorAll('.dropdown')[0].onclick = Accordion;

	function CloseNavigation(){
		if (document.querySelectorAll('.dropdown ul')[0].style.maxHeight == '200px')
		{
			document.querySelectorAll('.dropdown ul')[0].style.maxHeight = '0px';
			document.getElementById('nav-trigger').checked = false;
			document.getElementById('closeblock').style.height = '0px';
		}
		else{
			document.getElementById('nav-trigger').checked = false;
			document.getElementById('closeblock').style.height = '0px';
		}
	}
	document.getElementById('closeblock').onclick = CloseNavigation;	


	function OpenDivBlock(){
		if(this.checked){
			document.getElementById('closeblock').style.height='10000px';
		}	
		else{
			document.getElementById('closeblock').style.height = '0px';
		}
	}
	document.getElementById('nav-trigger').onchange = OpenDivBlock;

	 function validate(form) {
        var reason = "";
        if (form.firstname.value == "" || /[^a-zA-z]/.test(form.firstname.value)){
            reason += "Ошибка ввода имени\n";
        }
        if (form.phone.value == "" || /[^0-9+-]/.test(form.phone.value)){
            reason += "Ошибка ввода номера телефона\n";
        }
        if (form.e_mail.value == "" || !/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(form.e_mail.value)){
        	reason += "Ошибка ввода почты\n";
        }
        if (form.message.value == ""){
        	reason += "Пустое сообщение\n";
        }

        if (reason == "")
            return true;  
        else {
            alert(reason);  
            return false;
        }
    }
        
    function SendForm(){
    	var error = validate(document.getElementById('form'));
    	if (error) {
    		document.getElementById('form').submit();
    	}
    }
	document.getElementById('send').onclick = SendForm;

    function SendForm1(e){
    	e.preventDefault();
		var error = validate(document.getElementById('form1'));
		if (error) {
			document.getElementById('form1').submit();
		}
	}
	document.getElementById('modalsend').onclick = SendForm1;

	
	function OpenModalForm(event){
		event.preventDefault();
		document.getElementById('modalform').className = 'form shown';
		document.getElementById('bgmodalform').className = 'bgmodalform shown';
	}
	var button = document.querySelectorAll('.button-record');
	for (var i = 0; i < button.length; i++){
		button[i].onclick = OpenModalForm; 
	}


	function CloseModalForm(){
		document.getElementById('modalform').className = 'form';
		document.getElementById('bgmodalform').className = 'bgmodalform';
	}
	document.getElementById('bgmodalform').onclick = CloseModalForm;
	


})();