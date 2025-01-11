const addButton = document.querySelector(".add_note");


const form = document.querySelector('.form');
const input = document.querySelector('.input');


const noteSection = document.querySelector('.note_section');


const exitBtn = document.querySelector('.exit');
/* 
function createNote(){
   
    let note = document.createElement("div");
    note.classList.add("note");

    let titleSection = document.createElement("div");
    titleSection.classList.add("title_section");

    let exitBtn = document.createElement("button");
    exitBtn.classList.add("exit_btn");
    exitBtn.textContent = "back";

    let title = document.createElement("textarea");
    title.classList.add("title_stylings");
    title.setAttribute("wrap","off");
    title.setAttribute("maxlength","40");
    title.setAttribute("placeholder","Title");
    title.setAttribute("rows","1");

    titleSection.append(exitBtn, title);

  


    let content = document.createElement("textarea");
    content.classList.add("content_stylings");


    note.append(titleSection, content);

    noteSection.append(note);


    function exitNote(){
        note.classList.add("note_view");
        title.disabled = true;
        content.classList.add("content_view");
        content.disabled = true;
        exitBtn.classList.add("exit_btn_hidden");
        
    }exitBtn.addEventListener('click', exitNote);
            

   //  note use a conditional if statement that detects if the note is in general view mode
    function editNote(){
        note.classList.remove("note_view");
        title.readOnly = false;
        content.readOnly = false;
        exitBtn.classList.remove("exit_btn_hidden");

    }note.addEventListener('click', editNote);
   //
    
        noteSection.insertAdjacentHTML('beforeend',
            `
            <div class="note">
                <div class="title_section">
                    <button class="exit_btn">
                            back
                    </button>
                    <textarea class="title_stylings" wrap="off" maxlength="40" placeholder="Title" rows="1" ></textarea>
                </div>

                <textarea class="content_stylings" ></textarea>
            </div>
            `
        );
    

        

   

}addButton.addEventListener('click', createNote);
*/





let key = document.querySelector(".key");
let value = document.querySelector(".value");

let addToLocalBtn = document.querySelector(".add_to_local_btn");

console.log(localStorage);

function retrieveNotes(){
    testArray = JSON.parse(localStorage.getItem('allNotes'));

    if (testArray == null) {
        
        // If null, creates an empty array

        testArray = [];
    }

    let notes = { 
        id:  Math.floor(Math.random() * 100000),
        title: key.value,
        body: value.value
    }

    console.log(testArray);
    testArray.forEach(noteData => {
     

       let noteContainer = document.createElement("div");
        noteContainer.classList.add("note_container");
    
       let noteSelected = document.createElement("input");
        noteSelected.type = 'radio';
        noteSelected.classList.add("note_data_input_hidden");
    
      let noteDataTitle = document.createElement("p");
        noteDataTitle.innerHTML = noteData.title;
    
       let noteDataBody = document.createElement("p");
        noteDataBody.innerHTML = noteData.body;
    
    
       let noteDataTitleInput = document.createElement("input");
        //noteDataTitleInput.textContent = notes.title;
        noteDataTitleInput.type = "text";
        noteDataTitleInput.classList.add("note_data_input_hidden");
    
       let noteDataBodyInput = document.createElement("input");
       // noteDataBodyInput.textContent = notes.body;
        noteDataBodyInput.type = "text";
        noteDataBodyInput.classList.add("note_data_input_hidden");
    
       let noteDataEdit = document.createElement("button");
        noteDataEdit.classList.add("edit_btn");
        noteDataEdit.textContent = "Edit";
    
       let noteDeleteBtn = document.createElement("button");
        noteDeleteBtn.textContent = 'delete';
        noteDeleteBtn.classList.add("note_data_input_hidden");
    
      let noteDataSave = document.createElement("button");
        noteDataSave.classList.add("note_data_input_hidden");
        noteDataSave.textContent = "Save";
    
     noteContainer.append(noteSelected, noteDataTitle, noteDataBody, noteDataTitleInput, noteDataBodyInput, noteDataEdit, noteDeleteBtn, noteDataSave);
    
    noteSection.append(noteContainer);

       
      
    function edit(){ 

     
       
        let storedTitleValue =  noteDataTitle.innerHTML;
        let storedBodyValue =  noteDataBody.innerHTML;
    
        noteDataTitle.classList.add("note_data_input_hidden");
        noteDataBody.classList.add("note_data_input_hidden");
    
    
        noteDataTitleInput.classList.remove("note_data_input_hidden");
        noteDataTitleInput.value = storedTitleValue;
    
    
        noteDataBodyInput.classList.remove("note_data_input_hidden");
        noteDataBodyInput.value = storedBodyValue;
    
        noteDataSave.classList.add("note_data_input_active");
       
    
        noteDataEdit.classList.add("note_data_input_hidden");
         
         console.log(storedTitleValue);
         console.log(storedBodyValue);
     
     
       
    }noteDataEdit.addEventListener('click', edit);
    
  
        
    
function saveNote(){
    testArray = JSON.parse(localStorage.getItem('allNotes')); // parse storage beforehand

    let noteDataTitleSave = noteDataTitleInput.value;
    let noteDataBodySave = noteDataBodyInput.value;

    noteDataSave.classList.add("note_data_input_hidden");//button
    noteDataSave.classList.remove("note_data_input_active");

    noteDataTitle.textContent= noteDataTitleSave;
    noteDataBody.textContent= noteDataBodySave;
    noteDataTitle.classList.remove("note_data_input_hidden");
    noteDataBody.classList.remove("note_data_input_hidden");


    noteDataTitleInput.classList.remove("note_data_input_active");
    noteDataBodyInput.classList.remove("note_data_input_active");
    noteDataTitleInput.classList.add("note_data_input_hidden");
    noteDataBodyInput.classList.add("note_data_input_hidden");
    
    noteDataEdit.classList.remove("note_data_input_hidden");



    
    let findNoteId= noteData.id; 

    const testArrayIndex = testArray.findIndex(noteData => noteData.id === findNoteId);

  

    if (testArrayIndex !== findNoteId) {
       
        testArray[testArrayIndex].title = noteDataTitle.textContent;
        testArray[testArrayIndex].body = noteDataBody.textContent;
       // console.log("todo changed!"); 
    }

    console.log(testArray);
    localStorage.setItem('allNotes', JSON.stringify(testArray)); // stringify and send data back to storage
}noteDataSave.addEventListener('click', saveNote);


    function selectNote(){
  let timer = setTimeout(console.log("press and held!", 4000));
  noteSelected.classList.remove("note_data_input_hidden");

    if (noteSelected.checked = true){
        noteDeleteBtn.classList.remove("note_data_input_hidden");
    }

   }noteContainer.addEventListener('click', selectNote);

    function deleteNote(){
    testArray = JSON.parse(localStorage.getItem('allNotes')); // parse storage beforehand

    let findNoteId= notes.id; 

    const testArrayIndex = testArray.findIndex(notes => notes.id === findNoteId);

  

    if (testArrayIndex !== findNoteId) {
       
        testArray.splice(testArrayIndex, 1);
        noteSection.removeChild(noteContainer);
        localStorage.setItem('allNotes', JSON.stringify(testArray)); 
       
        console.log(localStorage);
        console.log(testArray);
    } 

    
   }noteDeleteBtn.addEventListener('click', deleteNote);
  
  });

 

    
   

 localStorage.setItem('allNotes', JSON.stringify(testArray));
};

retrieveNotes();


function addToLocal(){

    let testArray = JSON.parse(localStorage.getItem('allNotes')); 

    if (testArray == null) {
        
        // If null, creates an empty array

        testArray = [];
    }
   
    /* the notes object stores the two values */
    let notes = { 
        id:  Math.floor(Math.random() * 100000),
        title: key.value,
        body: value.value
    }


 
    localStorage.setItem('note', JSON.stringify(notes)); 
   
   let noteContainer = document.createElement("div");
    noteContainer.classList.add("note_container");


   
   let selectedBtnWrap = document.createElement("div");
    selectedBtnWrap.classList.add("selected_btn_wrap");    

   let noteSelected = document.createElement("input");
    noteSelected.type = 'checkbox';
    noteSelected.classList.add("note_data_input_hidden");


    selectedBtnWrap.append(noteSelected);


  let noteDataTitle = document.createElement("textarea");
    noteDataTitle.classList.add("title_stylings");
    noteDataTitle.setAttribute("wrap","off");
    noteDataTitle.setAttribute("maxlength","40");
    noteDataTitle.setAttribute("placeholder","Title");
    noteDataTitle.setAttribute("rows","1");
    noteDataTitle.innerHTML = notes.title;


    /*
    let noteDataTitle = document.createElement("p");
    noteDataTitle.innerHTML = notes.title;
    */


    // start textstyling

   
  
    // end 

   let noteDataBody = document.createElement("textarea");
       noteDataBody.classList.add("content_stylings");
       noteDataBody.innerHTML = notes.body;


  let  noteDataTitleInput = document.createElement("input");
    //noteDataTitleInput.textContent = notes.title;
    noteDataTitleInput.type = "text";
    noteDataTitleInput.classList.add("note_data_input_hidden");

   let noteDataBodyInput = document.createElement("input");
   // noteDataBodyInput.textContent = notes.body;
    noteDataBodyInput.type = "text";
    noteDataBodyInput.classList.add("note_data_input_hidden");

  let noteDataEdit = document.createElement("button");
    noteDataEdit.classList.add("edit_btn");
    noteDataEdit.textContent = "Edit";

   let noteDeleteBtn = document.createElement("button");
    noteDeleteBtn.textContent = 'delete';
    noteDeleteBtn.classList.add("note_data_input_hidden");

   let noteDataSave = document.createElement("button");
    noteDataSave.classList.add("note_data_input_hidden");
    noteDataSave.textContent = "Save";

    noteContainer.append(selectedBtnWrap, noteDataTitle, noteDataBody, noteDataTitleInput, noteDataBodyInput, noteDataEdit, noteDeleteBtn, noteDataSave);

    noteSection.append(noteContainer);

    
  
    console.log(localStorage);

    key.value = "";
    value.value = "";

    testArray.push(notes);

    localStorage.setItem('allNotes', JSON.stringify(testArray)); 

    console.log(JSON.parse(localStorage.getItem('allNotes'))); // gets 'allNotes' key, parses it, and logs it out.


    console.log(noteDataTitle.value);
    console.log(noteDataBody.value);




    function edit(){ 

        /*
        let storedTitleValue =  noteDataTitle.innerHTML;
        let storedBodyValue =  noteDataBody.innerHTML;
       
        let findNoteId= notes.id; 
    
        const testArrayIndex = testArray.findIndex(notes => notes.id === findNoteId);
    
      
    
        if (testArrayIndex !== findNoteId) {
           
            testArray[testArrayIndex].title = noteDataTitle.textContent;
            testArray[testArrayIndex].body = noteDataBody.textContent;
           // console.log("todo changed!"); 
        }
          */
       
        let storedTitleValue =  noteDataTitleInput.innerHTML;
        let storedBodyValue =  noteDataBodyInput.innerHTML;
    
        noteDataTitle.classList.add("note_data_input_hidden");
        noteDataBody.classList.add("note_data_input_hidden");
    
    
        noteDataTitleInput.classList.remove("note_data_input_hidden");
        noteDataTitleInput.value = storedTitleValue;
    
    
        noteDataBodyInput.classList.remove("note_data_input_hidden");
        noteDataBodyInput.value = storedBodyValue;
    
        noteDataSave.classList.add("note_data_input_active");
       
    
        noteDataEdit.classList.add("note_data_input_hidden");
         
         console.log(storedTitleValue);
         console.log(storedBodyValue);
     
     
       
    }noteDataEdit.addEventListener('click', edit);
    
/*
    function editFunction(){
        let todoItemSaved = todoItem.innerHTML; // saves the initial value of the to-do item.
      //  let todoIteminput = document.createElement("input"); // creates an input element

        todoIteminput.classList.add("todo_item_input_active");
        todoIteminput.classList.remove("todo_item_input_hidden");
     //   todoIteminput.type= "text"; // saves
        todoIteminput.value= todoItemSaved; //sets the input value to the initalue
      //todoIteminput.addEventListener('click', saveEdit);

      todoItem.classList.add("todo_item_hidden");
      todoItem.classList.remove("todo_item_active");

       


        saveButton.classList.remove("save_button_hidden");
        saveButton.classList.add("save_button_active");

        editButton.classList.remove("edit_button_active");
        editButton.classList.add("edit_button_hidden");

   

        
    }editButton.addEventListener('click', editFunction);
    */

/* 
    function edit(){ 
    
        let storedTitleValue =  noteDataTitle.innerHTML;
        let storedBodyValue =  noteDataBody.innerHTML;
    
        noteDataTitle.classList.add("note_data_input_hidden");
        noteDataBody.classList.add("note_data_input_hidden");
    
        noteDataTitleInput.classList.add("note_data_input_active");
        noteDataTitleInput.classList.remove("note_data_input_hidden");
        this.value = storedTitleValue;
    
        noteDataBodyInput.classList.add("note_data_input_active");
        noteDataBodyInput.classList.remove("note_data_input_hidden");
        this.value = storedBodyValue;
    
        noteDataSave.classList.add("note_data_input_active");
       
    
        noteDataEdit.classList.add("note_data_input_hidden");
         
         
    
     
        
       
    }noteDataEdit.addEventListener('click', edit);
 */   


function saveNote(){
    testArray = JSON.parse(localStorage.getItem('allNotes')); // parse storage beforehand

    let noteDataTitleSave = noteDataTitleInput.value;
    let noteDataBodySave = noteDataBodyInput.value;

    noteDataSave.classList.add("note_data_input_hidden");//button
    noteDataSave.classList.remove("note_data_input_active");

    noteDataTitle.textContent= noteDataTitleSave;
    noteDataBody.textContent= noteDataBodySave;
    noteDataTitle.classList.remove("note_data_input_hidden");
    noteDataBody.classList.remove("note_data_input_hidden");


    noteDataTitleInput.classList.remove("note_data_input_active");
    noteDataBodyInput.classList.remove("note_data_input_active");
    noteDataTitleInput.classList.add("note_data_input_hidden");
    noteDataBodyInput.classList.add("note_data_input_hidden");
    
    noteDataEdit.classList.remove("note_data_input_hidden");



    
    let findNoteId= notes.id; 

    const testArrayIndex = testArray.findIndex(notes => notes.id === findNoteId);

  

    if (testArrayIndex !== findNoteId) {
       
        testArray[testArrayIndex].title = noteDataTitle.textContent;
        testArray[testArrayIndex].body = noteDataBody.textContent;
       // console.log("todo changed!"); 
    }

    console.log(testArray);
    localStorage.setItem('allNotes', JSON.stringify(testArray)); // stringify and send data back to storage
}noteDataSave.addEventListener('click', saveNote);
   

function selectNote(){
  let timer = setTimeout(console.log("press and held!", 4000));
  noteSelected.classList.remove("note_data_input_hidden");

    if (noteSelected.checked = true){
        noteDeleteBtn.classList.remove("note_data_input_hidden");
    }

}noteContainer.addEventListener('click', selectNote);

function deleteNote(){
    testArray = JSON.parse(localStorage.getItem('allNotes')); // parse storage beforehand

    let findNoteId= notes.id; 

    const testArrayIndex = testArray.findIndex(notes => notes.id === findNoteId);

  

    if (testArrayIndex !== findNoteId) {
       
        testArray.splice(testArrayIndex, 1);
        noteSection.removeChild(noteContainer);
        localStorage.setItem('allNotes', JSON.stringify(testArray)); 
       
        console.log(localStorage);
        console.log(testArray);
    } 
  }noteDeleteBtn.addEventListener('click', deleteNote);
      
}addToLocalBtn.addEventListener('click', addToLocal);

    




   

//localStorage.clear();

/*make 2 functions*/
// 1. function for editing notes that also updates local storage.
// 2. function for deleting notes, both from the dom and from localstorage.
