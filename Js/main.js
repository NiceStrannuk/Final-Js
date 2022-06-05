next.onclick = function(){
    catImg.style.backgroundImage = 'url(css/img/exempleEnergy/monsterCat.png)'
    catImg.style.marginLeft = "-200px"
    catImg.style.transition = '0.8s'
    loader.style.marginLeft = "92%"
    loader.style.transition = "0.4s"
}

previous.onclick = function(){
    catImg.style.backgroundImage = 'url(css/img/exempleEnergy/fatCat.png)'
    catImg.style.transition = '0.8s'
    catImg.style.marginLeft = "-50px"
    loader.style.marginLeft = "-92%"
    loader.style.transition = "0.4s"
}
