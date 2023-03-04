function showDialog(id){
    document.getElementById('DeleteConfirm').style.display = "flex";
    document.getElementById('DeleteConfirm').setAttribute( "deletethis", id);
    
}


function fordelete(e){
    document.getElementById('DeleteConfirm').style.display = "none";
    var deletethis =  document.getElementById("DeleteConfirm").getAttribute("deletethis");

   document.getElementById(deletethis).remove();
}

function forclose(){
    document.getElementById("DeleteConfirm").style.display = "none";
}






function functionEdit(){
   window.location.href = "./post.html"
}
