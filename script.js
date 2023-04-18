const priceLists = document.getElementsByClassName('list');


//Make new price display: none if the current and new are the same.
// for(const list of priceLists){
//     for(const listItem of list.children){
//        if (listItem.getElementsByClassName('current')[0].innerHTML == listItem.getElementsByClassName('new')[0].innerHTML){
//             listItem.getElementsByClassName('new')[0].style.display = "none";
//        }
//     }
// };


function scroll() {
    Window.scroll({
                top: 100,
          left: 100,
          behavior: "smooth",
    });
}

let lastScrollPos = 0;
window.addEventListener('scroll', function(){
    if (window.scrollY > lastScrollPos){
        if((window.scrollY-lastScrollPos)<50){
            console.log('vei');
            document.getElementsByTagName('nav')[0].style.display='none';
        }
        
    } else if (window.scrollY < lastScrollPos){
        document.getElementsByTagName('nav')[0].style.display='flex';
    }
    lastScrollPos = window.scrollY;
})

// const taggleMap = () => {
//     document.getElementById('map').style.display = 'block';
//     document.getElementById('map').scrollIntoView();
//     // window.scrollTo({top:0, behavior: 'smooth'});

// }

// document.getElementById('mapAddress').addEventListener('click', taggleMap);

//const hidingTimeout = setTimeout(timeoutFunction, 1500, element);

const timeoutFunction = (element) =>{
    element.style.visibility = 'hidden';
}

const emailCopy = () =>{
    const checkElement = document.getElementById('emailCheck');
    checkElement.style.visibility = 'visible';
    setTimeout(timeoutFunction, 1500, checkElement);
}

const phoneCopy = () =>{
    const checkElement = document.getElementById('phoneCheck');
    checkElement.style.visibility = 'visible';
    setTimeout(timeoutFunction, 1500, checkElement);
}

const addressCopy = () =>{
    const checkElement = document.getElementById('mapCheck');
    checkElement.style.visibility = 'visible';
    setTimeout(timeoutFunction, 1500, checkElement);
}


document.getElementById('emailCopy').addEventListener('click', emailCopy);
document.getElementById('phoneCopy').addEventListener('click', phoneCopy);
document.getElementById('addressCopy').addEventListener('click', addressCopy);