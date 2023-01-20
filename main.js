<script language="javascript">
function pasuser(form) { 
if (form.id.value=="Admin") {
if (form.pass.value=="12345") {              
location="https://vrstr.github.io/uvps/" /* Свой location */
} else { alert("Неправильное имя пользователя или пароль")
}
} else { alert("Неправильное имя пользователя или пароль")
}
}
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML =
  text.replace("Войти","&#8635;");

}

<script>
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML =
  text.replace("Войти","&#8635;");
}
</script>

<script>
function reload_interval(time){
	setTimeout(function(){
		location.reload();
	}, time);
}
</script>
<script type="text/javascript">
	if input = document.getElementById("demo1");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("demo").click();
  }
});
</script>