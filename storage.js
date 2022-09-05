class Storage {
    static getSearchedUsersFromStorage(){
        // Tüm kulllanıcıları al
        let users;
        if (localStorage.getItem("searched")===null){
            users = [];
        }
        else{
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }
    static addSearchedUserToStorage(username){
        // Kullanıcı ekle
        let users = this.getSearchedUsersFromStorage();
        // IndexOf
        if (users.indexOf(username)=== -1) {
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users));
    }
    static clearAllSearchUsersFromStorage(){
        localStorage.removeItem("searched");
    }
}