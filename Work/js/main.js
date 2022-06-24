function menuList() {
  var nav = document.getElementById("myLists");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

// Set the date we're counting down to
var countDownDate = new Date("June 30, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
    minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


// Preloader Script

const loader = document.getElementById('preloader');

window.addEventListener('load', load);

function load() {
     loader.remove()
}


// sending message

// let btn = document.getElementById('btn')
// btn.addEventListener('click',function(e){
//   e.preventDefault()
//   let name = document.getElementById('name').value;
//   let email = document.getElementById('email').value;
//   let subject = document.getElementById('subject').value;
//   let gender = document.getElementById('gender').value;
//   let state = document.getElementById('state').value;
//   let occupation = document.getElementById('occupation').value;
//   let message = document.getElementById('message').value;
//   let body = 'Name: '+ name + '<br/> Email:' + email+ '<br/> Subject:' + subject + ' <br/> Gender:' + gender + ' <br/> State:' + state + ' <br/> Occupation:' + occupation +   'Message:'+ message;
//   Email.send({
//       Host : "smtp.gmail.com",
//       Username : "joshuaadisa161202@gmail.com",
//       Password : "afgrpkpbwbpnhhzs",
//       To : 'joshuaadisa161202@gmail.com',
//       From : email,
//       Subject : subject,
//       Body : body
//   }).then(
//     message => alert(message)
//   ).catch((error)=>{
//       console.log(error);
//   });
// }) 