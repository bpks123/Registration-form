function saveData(){
    let name, email, password;
    name=document.getElementById('name').value
    email=document.getElementById('email').value
    password=document.getElementById('password').value
    
    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{
        return v.email==email
    })){
        alert('You email is already register')
    }
    else{
        user_records.push({
            "name":name,
            "email":email,
            "password":password
        })
        localStorage.setItem("users",JSON.stringify(user_records))
    }
}

function loginData(){
    let email, password;
    email=document.getElementById('email').value
    password=document.getElementById('password').value
    
    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{
        return v.email==email && v.password==password
    })){
        alert("Login Successful")
        let current_user=user_records.filter((user)=>{
            return user.email==email && user.password==password
        })[0]
        console.log(current_user)
        localStorage.setItem('name',current_user.name)
        localStorage.setItem('email',current_user.email)
        //Send one page to another page in Javascript
        window.location.href='profile.html'
    }
    else{
        alert("Login Fail")
    }

}



