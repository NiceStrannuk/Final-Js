// Switcher

next.onclick = function(){
    catImg.style.backgroundImage = 'url(css/img/exempleEnergy/monsterCat.png)'
    catImg.style.marginLeft = "-100px"
    catImg.style.transition = '0.8s'
    loader.style.marginLeft = "92%"
    loader.style.transition = "0.4s"
    catImg.style.width = "400px"
    catImg.style.height = "400px"
}

previous.onclick = function(){
    catImg.style.backgroundImage = 'url(css/img/exempleEnergy/fatCat.png)'
    catImg.style.transition = '0.8s'
    catImg.style.marginLeft = "-75px"
    loader.style.marginLeft = "-92%"
    loader.style.transition = "0.4s"
    catImg.style.width = "400px"
    catImg.style.height = "400px"
}


// Dark & Lihgt


document.querySelector('.Main__energy__functionBlock__logo').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
    }
    else {
      localStorage.setItem('theme', 'dark')
    }
    addDarkClassToHTML()
  });
  
  function addDarkClassToHTML() {
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('html').classList.add('dark');
        document.querySelector('.themetoggle span').textContent = 'dark_mode';
      }
      else {
        document.querySelector('html').classList.remove('dark');
        document.querySelector('.themetoggle span').textContent = 'wb_sunny';
      }
    } catch (err) { }
  }
  
  addDarkClassToHTML();


  // Burger Menu

     

  let i = 0



  burger.onclick = function(){
     if(i == 0){
      burgerBlock.style.left = "0px"
      burgerBlock.style.transition = "1s"
      wrap.style.filter =  'blur(' + 5 + 'px)';
      
      
  }
}


 $(".liBurger").click(function(){   
       burgerBlock.style.left = ""
       wrap.style.filter =  '';
   })


// scroll


 function SmoothFirst(){
       window.scrollTo({
         top: 0,
         behavior: "smooth",
       });
       
   }

   

   function SmoothSecond(){
    window.scrollTo({
      top: 750,
      behavior: "smooth",
    });
    
  }



  function SmoothThird(){
    window.scrollTo({
      top: 1600,
      behavior: "smooth",
    });
    
}




// Reg


let gender = true;


        huitaFirst.onclick = function(){
            itemFirst.style.border = "4px double #fff"
            itemFirst.style.backgroundColor = "rgb(73, 107, 231)"
            itemSecond.style.border = ""
            itemSecond.style.backgroundColor = ""

            let gender = true;
            console.log(gender)
        }


        huitaSecond.onclick = function(){
            itemSecond.style.border = "4px double #fff"
            itemSecond.style.backgroundColor = "rgb(73, 107, 231)"
            itemFirst.style.border = ""
            itemFirst.style.backgroundColor = ""

            let gender = false;
            console.log(gender)
        }








        regBtn.onclick = function(){
          regMenu.style.display = "flex"
          accountMenu.style.display = "flex"
        }


         inLog.onclick = function(){
          regMenu.style.display = ""
          menuLogo.style.display = "flex"
        }

        btnReg.onclick = function(){
          menuLogo.style.display = ""
          regMenu.style.display = "flex"
          accountMenu.style.display = "flex"
        }


        burgerReg.onclick = function(){
          regMenu.style.display = "flex"
          accountMenu.style.display = "flex"
        }



        burgerLog.onclick = function(){
          menuLogo.style.display = "flex"
          regMenu.style.display = ""
          accountMenu.style.display = "flex"
        }

        



        
let users = JSON.parse(localStorage.getItem('userList')) || [];


mainRegister.onclick = function(){

  menuLogo.style.display = "flex"
  regMenu.style.display = ""
  accountMenu.style.display = "flex"


    let loginInfo = userLogin.value;
    let passwordInfo = userPassword.value;
    let newUser = {
        login: loginInfo,
        password: passwordInfo
    };
    userLogin.value = '';
    userPassword.value = '';

    users.push(newUser);

    localStorage.setItem('userList', JSON.stringify(users));
}





mainLogin.onclick = function() {
    let loginInfo = userLogin.value;
    let passwordInfo = userPassword.value;
    let newUser = {
        login: loginInfo,
        password: passwordInfo
    }
    userLogin.value = '';
    userPassword.value = '';
    let finded = false;
    for (let i = 0; i != users.length; i++) {
        if (newUser.login === users[i].login && newUser.password === users[i].password) {
            let finded = true;
        } else if (newUser.login === users[i].login && newUser.password !== users[i].password) {
            let finded = true;
        }
    }
    if (finded === false) {
    }

    menuLogo.style.display = ""
    regMenu.style.display = ""
    accountMenu.style.display = ""
}
