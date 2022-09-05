const githubForm=document.getElementById("github-form");
const nameInput =document.getElementById("githubname");
const clearLastUser=document.getElementById("clear-last-users");

const lastUsers=document.getElementById("last-users");
const github= new Github();
const ui = new UI();

eventListener();


function eventListener(){
    githubForm.addEventListener("submit",getData);
    clearLastUser.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);

}

function getData(e){

    let username = nameInput.value.trim();
    
    if(username ===""){
        alert("Lütfen geçerli bir değer giriniz")
    }
    else{
        github.getGithubData(username)
        .then(response=> {
            if(response.user.message ==="Not Found"){
                ui.errorMessage("Böyle bir kayıt bulunmamaktadır !!!","danger");
            }
            else{
                ui.addSearchedUserToUI(username);
                Storage.addSearchedUserToStorage(username);
                ui.showUserInfo(response.user);
                ui.showUserRepo(response.repo);
            }
        })
        .catch (err => ui.errorMessage(err,"danger"));
    }

    ui.clearInput(); // Input temizleme
    e.preventDefault();
}
function clearAllSearched(){
    //Tüm arananları temizleme
    if (confirm("Emin misiniz")){
        Storage.clearAllSearchUsersFromStorage(); // Storage temizleme
        ui.clearAllSearcedFromUI();
    }


}
function getAllSearched(){ //  For ile arananları yazdırma 
   let users = Storage.getSearchedUsersFromStorage();
   let result = ""; 
   users.forEach(user=> {
        result += ` <li class="list-group-item">${user}</li> `
    });
    lastUsers.innerHTML = result ;
   
}