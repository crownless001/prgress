$(document).ready(function() {
  // и тут ваш код
$("#plusOne").click(function plusOne() {
	let load = $("#my-progress-bar")[0].style.width;
	load = parseInt(load)+1;
	$("#my-progress-bar").width(load+"%");
	console.log(load);
});

$("#plusTwo").click(function plusOne() {
	let load = $("#my-progress-bar")[0].style.width;
	load = parseInt(load)+3;
	$("#my-progress-bar").width(load+"%");
	console.log(load);
});

$("#plusThree").click(function plusOne() {
	let load = $("#my-progress-bar")[0].style.width;
	load = parseInt(load)+7;
	$("#my-progress-bar").width(load+"%");
	console.log(load);
});

});
