const inputBox = document.getElementById('input-box'); // we selected the input box to get its text value.
const listContainer = document.getElementById('list-container'); // we selected list-container to add the contents of input box to ul.
document.addEventListener('keydown', (event)=>{
      if(event.key == 'Enter'){
            addTask();
      }
})

function addTask(){
      if(inputBox.value === ''){
            alert("You must write something!");
      }
      else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value; // we added content to li's inner html
            listContainer.appendChild(li);

            let span = document.createElement("span");
            span.innerHTML =  "\u00d7";
            li.appendChild(span);
      }
      inputBox.value = ''; // to erase the value of input box once the contents have been added.

      saveData(); //to store it on localStorage.
}

listContainer.addEventListener('click' , function(e){
      if(e.target.tagName === 'LI'){ //if we clicked on element with tagname LI. its class will be toggled to checked or removed if already checked.
            e.target.classList.toggle("checked"); 
            saveData();
      }
      else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove(); //if we clicked on tagNmae span where X is there. The parentElement i.e. LI will be deleted.
            saveData();
      }
}, false);


function saveData(){
      localStorage.setItem("data", listContainer.innerHTML)  //this will store all data of class listContainer to localStorage.
}

function showTask(){
      listContainer.innerHTML = localStorage.getItem('data');
}

showTask();