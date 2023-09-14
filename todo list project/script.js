const input=document.getElementById("input");
const description=document.getElementById("description");
const form=document.querySelector("form");
const container=document.getElementById("container");



const tasks = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
// const tasks = [];
showalltasks();

function showalltasks(){

    tasks.forEach((value,index)=>{

    
    const  outerdiv=document.createElement("div");
    outerdiv.setAttribute("class","task");
    

    const innerdiv=document.createElement("div");

    innerdiv.setAttribute("class","innerdiv");
    outerdiv.append(innerdiv);

    const p=document.createElement("p");
    p.innerText=value.input;
    innerdiv.append(p);

    const span=document.createElement("span");
    span.innerText=value.description;
    innerdiv.append(span);

    const deletebtn=document.createElement("button");
    deletebtn.setAttribute("class","delete");
    deletebtn.innerText="-";
   

   deletebtn.addEventListener("click",()=>{
    remove();
    tasks.splice(index,1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
      showalltasks();
   })
    outerdiv.append(deletebtn);

   container.append(outerdiv);

})

}

function remove(){
    tasks.forEach(()=>{
        const div=document.querySelector(".task");
        div.remove();

    })
}




 form.addEventListener("submit",(e)=>{
    e.preventDefault();
    remove();
    tasks.push({
        input:input.value,
        description:description.value,
    });
console.log(tasks);

localStorage.setItem("tasks",JSON.stringify(tasks));

showalltasks();
 })
