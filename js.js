let foodcard=document.querySelectorAll(".foodcard");
let bar=document.querySelector("#bar");



foodcard.forEach((curcard)=>{
    curcard.addEventListener("click",function (){
        console.log(curcard);

        let div=document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="icon" class="fa-solid fa-x"></i>
        <img src="${curcard.firstElementChild.src}" alt="">
        <h2>Food Details</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tempora nihil expedita a autem aliquid repudiandae, repellat minima in est, dignissimos recusandae voluptatum, harum et error quisquam necessitatibus ipsam unde.
        </p>
        `
        document.querySelector("body").appendChild(div)
        document.getElementById("icon").addEventListener("click",function(){
            div.remove();
        })
    })
})