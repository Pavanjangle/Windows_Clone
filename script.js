let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

var iconchrome = document.getElementsByClassName("iconchrome")[0]
var iconrecycle = document.getElementsByClassName("iconrecycle")[0]
var iconedge = document.getElementsByClassName("iconedge")[0]
var iconcomputer = document.getElementsByClassName("iconcomputer")[0]
var iconstore = document.getElementsByClassName("iconstore")[0]



taskbar.addEventListener("click", () => {
   if (startmenu.style.bottom == "50px") {
      startmenu.style.bottom = "-700px"
   } else {
      startmenu.style.bottom = "50px"
   }
})

function openLink1() {
   var link = "https://www.google.com/chrome/"
   window.location.href = link;
}
function openLink2() {
   var link = "https://play.google.com/store/apps/details?id=com.ryosoftware.recyclebin&hl=en_IN&gl=US&pli=1"
   window.location.href = link;
}
function openLink3() {
   var link = "https://www.microsoft.com/en-us/edge?form=MA13FJ"
   window.location.href = link;
}
function openLink4() {
   var link = "https://www.computerhope.com/jargon/m/mycomput.htm"
   window.location.href = link;
}
function openLink5() {
   var link = "https://apps.microsoft.com/store/apps"
   window.location.href = link;
}

iconchrome.addEventListener("click", openLink1);
iconrecycle.addEventListener("click", openLink2);
iconedge.addEventListener("click", openLink3);
iconcomputer.addEventListener("click", openLink4);
iconstore.addEventListener("click", openLink5);



