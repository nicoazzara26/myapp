$(document).ready(function () {
  var gbutton = $(".buttong");
  var eyebutton = $(".eye");
  var psw_input = $(".show-psw");

gbutton.click(function(){

});

eyebutton.click(function(){

  if(eyebutton.attr('class') == "eye"){
eyebutton.removeClass("eye").addClass("eye-hide");
psw_input.attr('type','text');
}else{
  eyebutton.removeClass("eye-hide").addClass("eye");
  psw_input.attr('type','password');
}

});

});
