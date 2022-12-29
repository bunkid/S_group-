

// var coll = document.getElementsByClassName("card");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     var active = document.getElementsByClassName("card--active")
//     if(active) {
//         this.classList.remove("card--active");
//     }
//     else {
//         this.classList.add("card--active");
//     }
//   });
// }
var coll = document.getElementsByClassName("card");
function hidecard()
{
   this.classList.remove("card--active");
}
function opencard()
{
   this.classList.add("card--active");
}
    for( i = 0; i <coll.length; i++)
    {
       if(coll[i].classList.contains("card--active"))
       {
           coll[i].addEventListener("click",hidecard);
       }
       else
       {
        coll[i].addEventListener("click",opencard);
       }
    }