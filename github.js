class Github{        // Class oluşturma
    constructor(){   // Alıncak verilerin değişkenleri
        this.url= "https://api.github.com/users/";
    }
    async getGithubData(username){ //Usernamaye göre GET Request işlemi
        const responseUser = await fetch(this.url + username); //fetch(url): 
        const responseRepo = await fetch(this.url + username + "/repos"); 
        
        const userData = await responseUser.json();
        const repoData = await responseRepo.json();

        return{  //Requestten dönen jsonun app.jsye döndürülmesi
            user:userData,
            repo:repoData
        }

    }
    
}