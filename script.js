//The function creates tabs

function openTab(evt, tabName) {
    //Declare all varibales;
    var i, tabcontent, tabLinks;

    //Access all elements with className tabcontents and store in tabcontent;
    //Loop through all the available elements and hide them;

    tabcontent = document.getElementsByClassName("tabcontents");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        
    }

    //Get all elements with className tabLink, and store them in tabLinks;
    //Loop through each, target the className and replace it with className "active";

    tabLinks = document.getElementsByClassName("tabLink");
    for(i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("active", "");
                
    }

        //Get an element, by its tabName, and display it if className is "active";
        document.getElementById(tabName).style.display = "grid";
        evt.currentTarget.className += "active";
        
}


//load the element with the id="defaultOpen" and click on it
var open = document.getElementById("defaultOpen").click();
