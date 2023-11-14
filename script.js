function removeTask(element) {
    console.log(element.parentElement.parentElement);
    element.parentElement.parentElement.remove();


}
function editTask(element) {
    if(element.textContent !== 'Done')
{    let currentel= element.parentElement.previousElementSibling.textContent;
    let editedval= document.createElement('input');
    editedval.type= "text";
    editedval.placeholder= "Please edit the task...";
    editedval.value=currentel;
    editedval.className='input_button';
    editedval.id='inputbtns'
    element.parentElement.parentElement.replaceChild(editedval, element.parentElement.previousElementSibling)
    element.textContent = 'Done';
}
else{
    let currentel= element.parentElement.previousElementSibling.value;
    if(currentel !== ''){ 
    let editedval= document.createElement('div');
    editedval.textContent=currentel;
    editedval.className='listItems';
    editedval.id='taskcontent'
    element.parentElement.parentElement.replaceChild(editedval, element.parentElement.previousElementSibling)
    element.innerHTML = `
    <i class="fa-regular fa-pen-to-square" style="margin-right: 3px;"></i>Edit Task
    `;}
    else{
        document.getElementById('alerted1').innerHTML= `<i class="fa-solid fa-triangle-exclamation" style="margin-right: 3px;"></i> Please enter something.....`;
        setTimeout(function() {
            document.getElementById("alerted1").innerHTML =``;
          }, 2000);
    }
    
}
}
function addTask() {
    
    let buttonTo = document.getElementById('btn');
    let input_val = buttonTo.previousElementSibling.value;
    buttonTo.previousElementSibling.value = '';
    let para = document.createElement('div');
    para.className = 'taskList';
    console.log(input_val);
    if (input_val !== '') {
        document.getElementById('notask').style.display='none';
            document.getElementById('alerted').innerHTML=`<i class="fa-solid fa-heart" style="margin-right: 3px"></i> Hope you complete the task...`;
            setTimeout(function() {
                document.getElementById("alerted").innerHTML =``;
              }, 1000);
        para.innerHTML = `
    <div class="listItems"> ${input_val}
                </div>

                <div style="display: flex; justify-content: flex-end;"><button id="done" onclick="removeTask(this)"
                        style="width: 90px; height: 30px; margin: 10px; background-color: rgb(229, 23, 23);border-radius: 5px; color: white;border: 2px solid rgb(255, 0, 0);"><i class="fa-solid fa-trash" style="margin-right: 3px;"></i>Remove</button> 
                            <button id="Edit" onclick="editTask(this)"
                        style="width: 90px; height: 30px; background-color: rgb(98, 4, 98);color: white; border-radius: 5px;margin: 10px; border: 2px solid rgb(98, 4, 98);">
                        <i class="fa-regular fa-pen-to-square" style="margin-right: 3px;"></i>Edit Task</button></div>
            `;
        console.log(para);
        document.getElementById("taskitm").appendChild(para);
    }
    else{
        document.getElementById('alerted').innerHTML= `<i class="fa-solid fa-triangle-exclamation" style="margin-right: 3px;"></i> Please enter something.....`;
        setTimeout(function() {
            document.getElementById("alerted").innerHTML =``;
          }, 2000);
    }
}