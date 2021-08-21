  window.onload=function(){
	  document.getElementById('loder').style.display="none";
	  document.getElementById('body-sec').style.display="block";
  }
  function genretid(){
      
	document.getElementById('cam-vid-id').value
	Math.floor(Math.random() * (11111111 + 99999999));
	  
	
  }


let tab=document.querySelector('#tabs_link');
tab.addEventListener('click',function(e){
	let id=e.target.id;
	
	let ele=document.querySelectorAll('.tab_box');
	let len=ele.length;
	for(let x=0;x<len;x++){
		ele[x].classList.add('hide');
	}
	document.querySelector('#box_'+id).classList.remove('hide');

	let mohide=document.querySelector('#mobilebar');
	mohide.classList.replace("mobile-menu", "tab-main")
	//console.log(mohide.className);
//	let hidemenu=document.querySelector('#cross');
	//console.log(hidemenu.className);
	//hidemenu.classList.replace("crossshowe", "crosshide");
	//sconsole.log(hidemenu.className);
	

	
	let tab_ele=document.querySelectorAll('.tab');
	let tab_len=tab_ele.length;
	for(let x=0;x<tab_len;x++){
		tab_ele[x].classList.add('not_active');
	}
	document.querySelector('#'+id).classList.remove('not_active');
	
});

function camshowe()   {

	let camshowe=document.getElementById("box_test2");
	let homehide=document.getElementById("box_test1");



	homehide.classList.add('hide');
	camshowe.classList.remove('hide');


}
 


function mobilemenu() {

	let tea=document.querySelector('#mobilebar');
	
    tea.classList.replace("tab-main", "mobile-menu");
	//console.log(tea.className);

//	let showe=document.querySelector('#cross');
//	console.log(showe.className);
//	showe.classList.replace("crosshide", "crossshowe");
//	console.log(showe.className);
}

 //function mobilehide() {


 // }

 function menubarhide() {

	let mohide=document.querySelector('#mobilebar');
	mohide.classList.replace("mobile-menu", "tab-main")
 }


function showevidads() {

	let showevidads=document.querySelector('#video-ads');
	//console.log(showevidads.className);
	showevidads.classList.replace("hide", "showe")
}

function hidevidads() {

	let hidevidads=document.querySelector('#video-ads');
	//console.log(hidevidads.className);
	hidevidads.classList.replace("showe", "hide");
}




jQuery('#vidads').on('submit',function(e){

	var idv = $('#cam-vid-id').val();
    var emailv = $('#cam-vid-email').val();
    var namev = $('#cam-vid-name').val();

    var bodyv = idv+ "is your treking id click hire thise link https://growad.web.app/ <br>Regards.<br>Grow ads";

Email.send({
    Host : "smtp.gmail.com",
    Username : "mksheela222@gmail.com",
    Password : "rmvbhxhwrmebqfkn",
    To : emailv ,
    From : "mksheela222@gmail.com",
    Subject : namev+", campain has been create successfully",
    Body : bodyv
});
      
	e.preventDefault();
	jQuery('#smgvisads').html('Please wait...');
	jQuery('#video-submit').attr('disabled',true);
	jQuery.ajax({
	  url:'https://script.google.com/macros/s/AKfycbxyWaUkApf_oL5TfTTjCIh7YwyUJh3mEY-BJlvH4aknWClje3y28LbmCS_24mSnd1FSdQ/exec',
	  type:'post',
	  data:jQuery('#vidads').serialize(),
	  success:function(result){
		jQuery('#vidads')[0].reset();
		alert(" successfull...")
		jQuery('#smgvisads').html(' ');
		jQuery('#video-submit').attr('disabled',false);
		//window.location.href='';
	  }
	});
	});
	