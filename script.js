const user = [
  { hello:"JayGinendra",
    name: "Champaklal Gada",
    role: "All Rounder",
    image: "https://getpersonality.com/_next/image?url=https%3A%2F%2Fstatic1.personality-database.com%2Fprofile_images%2Fd6ec3b2619cf4b84b85b273f012a91bd.png&w=3840&q=75",
    work: "Social Work",
    intro:"Aeee jethiya"

  },
  { hello:"JayGinendra",
    name: "Jethalal Gada",
    role: "Businessman",
    image: "https://cdn.siasat.com/wp-content/uploads/2024/11/Dilip-Joshi-1.jpg",
    work: "Gada Electronics",
    intro:"Aee Doby ,Nonsense!!"
  },
  { hello:"Vadakam",
    name: "Krishnan Iyer",
    role: "Scientist",
    image: "https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/30/9a1ece3d3675c3b07f68aef14ee8ce891672374419984454_original.jpg",
    work: "Laboratory",
    intro:"Ayoo Jeethalalll!!"
  },
  { hello:"Kasa Aahes",
    name: "Bhide",
    role: "TutionTeacher",
    image: "https://pbs.twimg.com/profile_images/1411415015278604295/x6LGrpYP_400x400.jpg",
    work: "Gokuldham Society",
    intro:"Humare Jamane Mein"
  },
  { hello:"Kashi Aahes",
    name: "Madhvi Bhide",
    role: "Businesswomen",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPI6DLZptd4ONSWtY7EXL3a2LKfGkU1Yobg&s",
    work: "Home",
    intro:"Ahho Aikla kayy!"
  },
  { hello:"Namaste",
    name: "Hansraj Hathi",
    role: "Doctor",
    image: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/07/17/Pictures/_b3e5a11c-897b-11e8-82c5-1329a5e665e9.jpg",
    work: "Clinic",
    intro: "Khane Ki baat mat karo"
  },
  { hello:"Duniya Hiladunga",
    name: "PopatlalPandey",
    role: "Reporter",
    image: "https://images.news18.com/ibnlive/uploads/2022/06/untitled-design-1-20-16544945404x3.png",
    work: "Press",
    intro: "Yeh sab choro mere liye ladki Dhunddo"
  },
  { hello: "Hello",
    name: "Taarak Mehta",
    role: "Writer",
    image: "https://static.india.com/wp-content/uploads/2025/06/CUserssimran.keswaniDownloadsWhatsApp-Image-2025-05-01-at-2.35.02-PM-1.jpeg-2025-06-29T161308.519.png?impolicy=Medium_Widthonly&w=400",
    work: "Office",
    intro: "Say no to Deit Food"
  }
];

var main = document.querySelector('main')

let sum = " ";

user.forEach(function(elem,index){
  sum = sum + `
  <div id="container">
  <div id="man">
    <img src="${elem.image}" alt="">
  </div>
  <h1>${elem.name}</h1>
  <h2>${elem.role}</h2>
  <button id="${index}">Contact</button>
  </div>`;
    
});

main.innerHTML = sum;



var newpht = document.querySelector('.circle-img img')
var span = document.querySelector('h1 span')
var Hello = document.querySelector('.hello')
var badge = document.querySelector('.badge')
var badgedark = document.querySelector('.badge.dark')
var bio = document.querySelector('p')




var close = document.querySelector('section')
var back = document.querySelector('#new').addEventListener('click',function(){
  close.style.display = 'none'
  
})

main.addEventListener('click',function(elem){
  
  if(elem.target.tagName === "BUTTON" ){

    var currentUser = user[elem.target.id]

    newpht.src = currentUser.image
    span.textContent = currentUser.name
    Hello.textContent = currentUser.hello
    badge.textContent = currentUser.role
    badgedark.textContent = currentUser.work
    bio.textContent = currentUser.intro
    close.style.display = 'flex'
 
  }
})




var icons = document.querySelectorAll(".icon");

icons.forEach(function(icon){
    icon.addEventListener("click", function(){

        icons.forEach(function(i){
            i.classList.remove("active");
        });

        this.classList.add("active");
    });
});

