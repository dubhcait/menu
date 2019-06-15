const toggle= document.getElementById('toggle');
let i = 0
const menu = document.getElementById('menu').childNodes;

const expand = () => {
   
  if (i === 0) {
        document.getElementById('add').style.transform = 'rotate(45deg)';
        document.getElementById('menu').style.transform='scale(1)'
        menu[1].style.transform='translateY(-160px)';
        menu[3].style.transform='translate(140px,-80px)';
        menu[5].style.transform='translate(140px,80px)';
         menu[7].style.transform='translateY(160px)';
          menu[9].style.transform='translate(-140px,80px)';
           menu[11].style.transform='translate(-140px,-80px)';
    i=1  
    } else {
        document.getElementById('add').style.transform = 'rotate(0deg)';
         document.getElementById('menu').style.transform='scale(0.9)'
          menu[1].style.transform='translateY(0)';
        menu[3].style.transform='translate(0)';
        menu[5].style.transform='translate(0)';
         menu[7].style.transform='translateY(0)';
          menu[9].style.transform='translate(0)';
           menu[11].style.transform='translate(0)';
  i=0
    }
}
toggle.addEventListener('click', expand)