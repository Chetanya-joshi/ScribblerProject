
function functionEdit(){
   window.location.href = "./html/post.html"
}


function EditText(){
    if(document.getElementById("titlePost").getAttribute("contenteditable")=="false" && document.getElementById("text-area").getAttribute("contenteditable")=="false"){
        document.getElementById("titlePost").setAttribute("contenteditable" , "true");
        document.getElementById("titlePost").style.border = "2px solid pink";
        document.getElementById("text-area").setAttribute("contenteditable" , "true");
        document.getElementById("text-area").style.border = "2px solid pink";
        document.querySelector(".editbtn").innerHTML = `<button type="button" id="Savebutton" onclick="EditClose()">Save<i class="fa fa-save"><i></button>`
}
}


function EditClose(){
    if(document.getElementById("titlePost").getAttribute("contenteditable")=="true" && document.getElementById("text-area").getAttribute("contenteditable")=="true"){
        document.getElementById("titlePost").setAttribute("contenteditable" , "false");
        document.getElementById("titlePost").style.border = "none";
        document.getElementById("text-area").setAttribute("contenteditable" , "false");
        document.getElementById("text-area").style.border = "none";
        document.querySelector(".editbtn").innerHTML = `<button type="button" id="editbutton" onclick="EditText()">Edit<i class="fa fa-edit"></i></button>`
    }
}



//Like Button

var count = 0;
function Likebtn(){
    count = count + 1;
    document.getElementById("LikeText").innerHTML = `<button type="button" onclick="Likebtn()" ><i class="fa fa-thumbs-up"></i>Liked</button>`;
    document.getElementById("ShowLike").innerText = count + " person likes this!";
}



function showComment(id){
    if(document.getElementById("textBox").value === ""){
        alert("Please add a comment!");
    }
    else{
    document.getElementById("showComment").style.display = "block";
   
    document.getElementById("showComment").innerHTML += `<p>${id.value}</p><br>`; 
    document.getElementById("textBox").value = "";
    }
}
