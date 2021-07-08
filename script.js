/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

class navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="topnav" id="myTopnav">
    <a href="/">Home</a>
    <a href="https://balajis.com/content-archive/" target="_blank">Content Archive</a>
    <a href="https://balajis.com/about/" target="_blank">About Balaji</a>
    <a class="social" aria-hidden="true" href="https://github.com/ideas-balaji/ideas-balaji" target="_blank">
    <i class="fa fa-github" style="color:black"></i> 
    </a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars" style="color:white"></i>
    </a>
  </div>
    `
  }
}
customElements.define('navbar-template', navbar);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
