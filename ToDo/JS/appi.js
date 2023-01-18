let taskList=document.querySelector(".task_list");
let addInput=document.querySelector("input");
let addButton=document.querySelector("button");
let amounter=0;

addButton.addEventListener("click",function(){
  if(addInput.value!=""&& amounter!=15){
    let matchArr=taskList.textContent.includes(addInput.value);
    //console.log(matchArr);
    if (matchArr==false) {
      taskList.insertAdjacentHTML("beforeend",`<li>${addInput.value}<button onclick="delTask(this)" class="button_delete">Delete task</button></li>`)
      addInput.value="";
      addInput.placeholder="Write your next task!";
      ++amounter;
    //console.log(taskList.textContent);
    }else{
      addInput.value="";
      addInput.placeholder="This task already exist,sorry!Try another one!";
    }
  }else if(amounter==15){
    addInput.value="";
    addInput.placeholder="Stop it ,It`s a lot of tasks!!!!";
  }else if(addInput.value==""){
    addInput.placeholder="Maybe you try to write smthing,no?";
   // console.log(taskList.textContent);
  }

})

function delTask(e){
  e.closest("li").remove();
  --amounter;
  
}
