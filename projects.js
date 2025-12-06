import {ject} from "./data.js"
console.log(ject.name)
const project = document.getElementById("projects")
ject.forEach(jects =>{

    let div_ele = document.createElement("div")
    div_ele.setAttribute("class" , "textproject")


    let img_ele = document.createElement("img")
    img_ele.setAttribute("src", jects.imageurl)
    
    let h2_ele = document.createElement("h2")
    h2_ele.innerHTML = jects.name

    let p_ele = document.createElement("p")
    p_ele.innerHTML = jects.nobel


     div_ele.appendChild(img_ele)
     div_ele.appendChild(h2_ele)
     div_ele.appendChild(p_ele)

    
     project.appendChild(div_ele)
});