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


let body = document.querySelector("body");

let keyValueSection = document.querySelector(".key_value_section");

let key = document.querySelector(".key");
let value = document.querySelector(".value");

let createBtn= document.querySelector(".create_btn");


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
          noteSelected.type = 'checkbox';
          //noteSelected.classList.add("note_data_input_hidden");
  
      let noteContainerWrap = document.createElement("div");
     
      let noteDataTitleWrap = document.createElement("div");
          noteDataTitleWrap.classList.add("title_stylings");
     
      let noteDataSave = document.createElement("button");
          noteDataSave.classList.add("note_data_input_hidden");
          noteDataSave.textContent = "Save";
      
      let noteDataTitle = document.createElement("p");
          noteDataTitle.classList.add("title_stylings");
          noteDataTitle.innerHTML = noteData.title;
          
    
      
      noteDataTitleWrap.append(noteDataSave, noteDataTitle);
      

      
        
        
      let noteDataBody = document.createElement("div");
          noteDataBody.classList.add("content_stylings");
          noteDataBody.innerHTML = noteData.htmlMarkup;

  
      let noteDataEdit = document.createElement("button");
          noteDataEdit.classList.add("edit_btn");
          noteDataEdit.textContent = "Edit";
  
      let noteDeleteBtn = document.createElement("button");
          noteDeleteBtn.textContent = 'delete';
          noteDeleteBtn.classList.add("note_data_input_hidden");


      let toolBar = document.createElement('div');
          toolBar.classList.add("toolbar");
          toolBar.classList.add('note_data_input_hidden');
  
  
        let bold = document.createElement('button');
            bold.textContent= "𝐁";
          
  
        let italic = document.createElement('button');    
            italic.textContent= "I";

        let underline = document.createElement('button');       
            underline.textContent= "U";

        let strikethrough = document.createElement('button');
            strikethrough.textContent= "S";
  
      toolBar.append(bold, italic, underline, strikethrough);
  

    
      

    
    noteContainerWrap.append(noteDataTitleWrap, noteDataBody, toolBar, noteDataEdit, noteDeleteBtn);
    
    noteContainer.append(noteContainerWrap);

    noteSection.append(noteContainer);


/* 
  function titleCharLimit(event){
   let maxLength = 10;
   let titleLength = noteDataTitle.textContent.length;
  


   if(titleLength >= maxLength){
      event.preventDefault();
    noteDataTitle.textContent = noteDataTitle.textContent.slice(0, maxLength);
   }
  // console.log(titleLength);

  }noteDataTitle.addEventListener('keyup', titleCharLimit) 
   
  */


  
const searchNotes = document.querySelector(".searchbar");
const allNotes = document.querySelectorAll(".note_container");

function filterNotes(){
  let searchquery = searchNotes.value.trim().toLowerCase(); //trim() cuts whites space and tolowercase makes search queary case insensitive

  //console.log(searchquery);

  
  allNotes.forEach(noteData => {
   // console.log(noteData); // logging out all data in testArray array
        noteData.style.display = 'block';
    if (!noteData.textContent.toLowerCase().includes(searchquery)){
        noteData.style.display = 'none';
    }  
  })
  


}searchNotes.addEventListener('input', filterNotes);


  function edit(){ 
      noteDataBody.focus();
      


      body.classList.add("disable_body_scroll");
      noteContainerWrap.classList.add("note_container_wrap");
      noteContainer.classList.add("selected_note_container");
      noteDataTitleWrap.classList.add("note_data_title_wrap");
      noteDataBody.classList.add("selected_content_stylings");      
      toolBar.classList.remove('note_data_input_hidden');
      toolBar.classList.add('toolbar_stylings');
     
        

      let storedTitleValue = noteDataTitle.innerHTML;
      let storedBodyValue = noteDataBody.innerHTML;
  
     // noteDataTitle.classList.add("note_data_input_hidden");
     // noteDataBody.classList.add("note_data_input_hidden");
  
    noteDataTitle.setAttribute("contenteditable", "true");
    noteDataBody.setAttribute("contenteditable", "true");



     // noteDataTitleInput.classList.remove("note_data_input_hidden");
      noteDataTitle.value = storedTitleValue;
  
  
     // noteDataBodyInput.classList.remove("note_data_input_hidden");
      noteDataBody.value = storedBodyValue;
  
      noteDataSave.classList.add("note_data_input_active");
     
  
      noteDataEdit.classList.add("note_data_input_hidden");
      
      noteDeleteBtn.classList.add("note_data_input_hidden");

     //  console.log(storedTitleValue);
     //  console.log(storedBodyValue);
   
    // toolBar.classList.remove('note_data_input_hidden');
     
    bold.classList.remove('note_data_input_hidden');
    italic.classList.remove('note_data_input_hidden');
    underline.classList.remove('note_data_input_hidden');
    strikethrough.classList.remove('note_data_input_hidden');

  }noteDataEdit.addEventListener('click', edit);
  
  function boldFunction(){ 
    noteDataBody.focus();
    document.execCommand('bold', false, null);
    bold.classList.toggle("active_class");

  }bold.addEventListener('click', boldFunction);
 
  function italicFunction(){ 
    noteDataBody.focus();
    document.execCommand('italic', false, null);
    italic.classList.toggle("active_class");
    
  }italic.addEventListener('click', italicFunction);
 
  function underlineFunction(){ 
    noteDataBody.focus();
    document.execCommand('underline', false, null);
    underline.classList.toggle("active_class");
    
  }underline.addEventListener('click', underlineFunction);
 
  function strikethroughFunction(){ 
    noteDataBody.focus();
    document.execCommand('strikethrough', false, null);
    strikethrough.classList.toggle("active_class");
  }strikethrough.addEventListener('click', strikethroughFunction);
 
 /* 
function selectNote(){
  
 // noteSelected.classList.remove("note_data_input_hidden");

    if (noteSelected.checked = true){
        noteDeleteBtn.classList.toggle("note_data_input_hidden");
        //noteSelected.classList.toggle("note_data_input_hidden");
        noteSelected.checked = false;
    } else if(noteSelected.checked = false){
      noteDeleteBtn.classList.toggle("note_data_input_hidden");
     // noteSelected.checked = true;
    }
 
    setTimeout(console.log("press and held!", 5000));

}noteSelected.addEventListener('click', selectNote);

*/   
  function saveNote(){
    testArray = JSON.parse(localStorage.getItem('allNotes')); // parse storage beforehand

  // let noteDataTitleSave = noteDataTitle.textContent;   // noteDataTitleInput.value;
  //  let noteDataBodySave = noteDataBody.textContent;
    body.classList.remove("disable_body_scroll");

    noteContainerWrap.classList.remove("note_container_wrap");
    noteContainer.classList.remove("selected_note_container");
    noteDataTitleWrap.classList.remove("note_data_title_wrap");
    noteDataBody.classList.remove("selected_content_stylings");

    toolBar.classList.add('note_data_input_hidden');
    toolBar.classList.remove('toolbar_stylings');

    noteDataSave.classList.add("note_data_input_hidden");//button
    noteDataSave.classList.remove("note_data_input_active");

    noteDeleteBtn.classList.remove("note_data_input_hidden");
  // noteDataTitle.textContent= noteDataTitleSave;
  // noteDataBody.textContent= noteDataBodySave;
    noteDataTitle.classList.remove("note_data_input_hidden");
    noteDataBody.classList.remove("note_data_input_hidden");


  // noteDataTitleInput.classList.remove("note_data_input_active");
    //noteDataBodyInput.classList.remove("note_data_input_active");
    //noteDataTitleInput.classList.add("note_data_input_hidden");
    //noteDataBodyInput.classList.add("note_data_input_hidden");
    
    noteDataEdit.classList.remove("note_data_input_hidden");


    noteDataTitle.setAttribute("contenteditable","false");
    noteDataBody.setAttribute("contenteditable","false");
    
    
    let findNoteId= noteData.id; 

    const testArrayIndex = testArray.findIndex(noteData => noteData.id === findNoteId);



    if (testArrayIndex !== findNoteId) {
      
        testArray[testArrayIndex].title = noteDataTitle.textContent;
        testArray[testArrayIndex].body = noteDataBody.textContent;
        testArray[testArrayIndex].htmlMarkup = noteDataBody.innerHTML;
      // console.log("todo changed!"); 
    }

    toolBar.classList.add('note_data_input_hidden');

  
    
    localStorage.setItem('allNotes', JSON.stringify(testArray)); // stringify and send data back to storage
    console.log(testArray);
    console.log(localStorage);
    console.log(noteDataTitle.textContent);
    console.log(noteDataBody.textContent);
  }noteDataSave.addEventListener('click', saveNote);
    

/* 
    function selectNote(){
  let timer = setTimeout(console.log("press and held!", 4000));
  noteSelected.classList.remove("note_data_input_hidden");

    if (noteSelected.checked = true){
        noteDeleteBtn.classList.remove("note_data_input_hidden");
    }

   }noteContainer.addEventListener('click', selectNote);
*/
  function deleteNote(){
    testArray = JSON.parse(localStorage.getItem('allNotes')); // parse storage beforehand

    let findNoteId= noteData.id; 

    const testArrayIndex = testArray.findIndex(noteData => noteData.id === findNoteId);



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

function createNote(){
  keyValueSection.classList.remove("key_value_section_hidden");

  createBtn.classList.add("key_value_section_hidden");
}createBtn.addEventListener('click', createNote)

function addToLocal(){

    let testArray = JSON.parse(localStorage.getItem('allNotes')); 

    if (testArray == null) {
        
        // If null, creates an empty array

        testArray = [];
    }
   
    

  
   
   //className.titleClass = noteDataTitle.className;
    /* the notes object stores the two values */
    let notes = { 
        id:  Math.floor(Math.random() * 100000),
        title: key.value,
        body: value.value,
    }



 // EXPAND ON THE ADD FUNCTION BY DETECTING IF AN IMG HAS BEEN ADDED, AND IF SO CONVERT IT INTO A BASE 64STRING(I THINK?), AND SETTING IT TO AN PROPERTY CALLED "NOTE-IMAGES"
 // A POSSIBLE SOLUTION MIGHT BE TO CREATE AN ARRAY FOR IMGS IN THE NOTES OBJECT, (BETTER TO ASSUME SOMEONE'LL HAVE MULTIPLE IMGS INSTEAD OF ONE).  

 // MAKE A "CANVAS MODE" AS WELL FOR DRAWING CAPACITY.

    //localStorage.setItem('note', JSON.stringify(notes)); 

    // might wanna change the 'note' key to 'last_added_note' because it saves the data of the last added note.;
   
   let noteContainer = document.createElement("div");
    noteContainer.classList.add("note_container");


   
   let selectedBtnTitleWrap = document.createElement("div");
   selectedBtnTitleWrap.classList.add("selected_btn_wrap");    

   /* 
   let noteSelected = document.createElement("input");
    noteSelected.type = 'checkbox';
    noteSelected.classList.add("note_data_input_hidden");
*/

   



    /*
      let noteDataTitle = document.createElement("textarea");
    noteDataTitle.classList.add("title_stylings");
    noteDataTitle.setAttribute("wrap","off");
    noteDataTitle.setAttribute("maxlength","40");
    noteDataTitle.setAttribute("placeholder","Title");
    noteDataTitle.setAttribute("rows","1");
    noteDataTitle.innerHTML = notes.title;

    */
    let noteDataTitle = document.createElement("p");
    noteDataTitle.classList.add("title_stylings");
  //  noteDataTitle.setAttribute("contenteditable","true");
    noteDataTitle.innerHTML = notes.title;
   
    //noteDataTitle.innerHTML = notes.title;
   


    selectedBtnTitleWrap.append(/*noteSelected,*/ noteDataTitle);
 


  

      let noteDataBody = document.createElement("div");
          noteDataBody.classList.add("content_stylings");
        //  noteDataBody.setAttribute("contenteditable","true");
          noteDataBody.innerHTML = notes.body;
      
           markup = noteDataBody.innerHTML;


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
          noteDeleteBtn.textContent = 'Delete Note';
         

    
    let toolBar = document.createElement('div');
    toolBar.classList.add('note_data_input_hidden');
 
    let bold = document.createElement('button');
    bold.textContent= "𝐁";
  

    let italic = document.createElement('button');    
        italic.textContent= "I";

    let underline = document.createElement('button');       
        underline.textContent= "U";

    let strikethrough = document.createElement('button');
        strikethrough.textContent= "S";
    

    toolBar.append(bold, italic, underline, strikethrough);

   let noteDataSave = document.createElement("button");
    noteDataSave.classList.add("note_data_input_hidden");
    noteDataSave.textContent = "Save";

    noteContainer.append(selectedBtnTitleWrap, noteDataBody, noteDataTitleInput, noteDataBodyInput, toolBar, noteDataEdit, noteDeleteBtn, noteDataSave);

    noteSection.append(noteContainer);

    
  
    console.log(localStorage);

    key.value = "";
    value.value = "";

    notes.htmlMarkup = markup;

    testArray.push(notes);
   

    localStorage.setItem('allNotes', JSON.stringify(testArray));
    
  
    console.log(JSON.parse(localStorage.getItem('allNotes'))); // gets 'allNotes' key, parses it, and logs it out.


    console.log(noteDataTitle.textContent);
    console.log(noteDataBody.textContent);

 
/* 
   // saving text formatting progress notes completion: 1/4.

   // test 1-can save formatted text to localstorage
   // test2 - create a random array
    let randomDiv = document.createElement('div');
    randomDiv.classList.add('example') 
   //   randomHTML.classList.add('example');

  let childElement = document.createElement('p'); 
  childElement.setAttribute("contenteditable","true");

    childElement.classList.add('blah'); 

    childElement.textContent = childElement.innerHTML;

  let saveRandomButton = document.createElement('button'); 
  saveRandomButton.textContent='saveRandom';


  let boldRandom = document.createElement('button'); 
  boldRandom.textContent='B';
  
  randomDiv.append(childElement, saveRandomButton, boldRandom);

  function boldRandomFunction(){ 


  
    document.execCommand('bold', false, null);
    // const boldText = document.createElement('b');

    boldRandom.classList.toggle("active_class");
    
  

  }boldRandom.addEventListener('click', boldRandomFunction);

  noteSection.append(randomDiv);


    localStorage.setItem('example', JSON.stringify(randomDiv.innerHTML));

    console.log(localStorage.getItem('example'));

    function saverandom(){
      JSON.parse(localStorage.getItem('example')); // parse storage beforehand
  
     
      
      localStorage.setItem('example', JSON.stringify(randomDiv.innerHTML)); // stringify and send data back to storage
      console.log(localStorage);
  
    }saveRandomButton.addEventListener('click', saverandom);
    */

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
       

       
          

        let storedTitleValue = noteDataTitle.innerHTML;
        let storedBodyValue = noteDataBody.innerHTML;
    
       // noteDataTitle.classList.add("note_data_input_hidden");
      //  noteDataBody.classList.add("note_data_input_hidden");
    
      noteDataTitle.setAttribute("contenteditable","true");
      noteDataBody.setAttribute("contenteditable","true");


       // noteDataTitleInput.classList.remove("note_data_input_hidden");
        noteDataTitle.value = storedTitleValue;
    
    
       // noteDataBodyInput.classList.remove("note_data_input_hidden");
        noteDataBody.value = storedBodyValue;
    
        noteDataSave.classList.add("note_data_input_active");
       
    
        noteDataEdit.classList.add("note_data_input_hidden");
        
        noteDeleteBtn.classList.remove("note_data_input_hidden");

       //  console.log(storedTitleValue);
       //  console.log(storedBodyValue);
     
      // toolBar.classList.remove('note_data_input_hidden');

      toolBar.classList.remove('note_data_input_hidden');
 
  
       
    }noteDataEdit.addEventListener('click', edit);
    
    
    function boldFunction(){ 
      noteDataBody.focus();
      document.execCommand('bold', false, null);
      bold.classList.toggle("active_class");
  
    }bold.addEventListener('click', boldFunction);
   
    function italicFunction(){ 
      noteDataBody.focus();
      document.execCommand('italic', false, null);
      italic.classList.toggle("active_class");
      
    }italic.addEventListener('click', italicFunction);
   
    function underlineFunction(){ 
      noteDataBody.focus();
      document.execCommand('underline', false, null);
      underline.classList.toggle("active_class");
      
    }underline.addEventListener('click', underlineFunction);
   
    function strikethroughFunction(){ 
      noteDataBody.focus();
      document.execCommand('strikethrough', false, null);
      strikethrough.classList.toggle("active_class");
    }strikethrough.addEventListener('click', strikethroughFunction);
   
    



   


function saveNote(){
    testArray = JSON.parse(localStorage.getItem('allNotes')); // parse storage beforehand

   // let noteDataTitleSave = noteDataTitle.textContent;   // noteDataTitleInput.value;
   // let noteDataBodySave = noteDataBody.textContent;

    noteDataSave.classList.add("note_data_input_hidden");//button
    noteDataSave.classList.remove("note_data_input_active");

    //noteDataTitle.textContent= noteDataTitleSave;
    //noteDataBody.textContent= noteDataBodySave;

    noteDataTitle.classList.remove("note_data_input_hidden");
    noteDataBody.classList.remove("note_data_input_hidden");


   // noteDataTitleInput.classList.remove("note_data_input_active");
    //noteDataBodyInput.classList.remove("note_data_input_active");
    //noteDataTitleInput.classList.add("note_data_input_hidden");
    //noteDataBodyInput.classList.add("note_data_input_hidden");
    
    noteDataEdit.classList.remove("note_data_input_hidden");


    noteDataTitle.setAttribute("contenteditable","false");
    noteDataBody.setAttribute("contenteditable","false");
    
    let findNoteId= notes.id; 

    const testArrayIndex = testArray.findIndex(notes => notes.id === findNoteId);

  

    if (testArrayIndex !== findNoteId) {
       
        testArray[testArrayIndex].title = noteDataTitle.textContent;
        testArray[testArrayIndex].body = noteDataBody.textContent;
        testArray[testArrayIndex].htmlMarkup = noteDataBody.innerHTML;
       // console.log("todo changed!"); 
    }

    

    
    localStorage.setItem('allNotes', JSON.stringify(testArray)); // stringify and send data back to storage
   
    // localStorage.setItem('example', JSON.stringify(randomDiv.innerHTML));
    console.log(testArray);
    console.log(localStorage);
    console.log(noteDataTitle.textContent);
    console.log(noteDataBody.textContent);

    toolBar.classList.add('note_data_input_hidden');
 
    

}noteDataSave.addEventListener('click', saveNote);
   


/* 
function selectNote(){
  
 // noteSelected.classList.remove("note_data_input_hidden");

    if (noteSelected.checked = true){
        noteDeleteBtn.classList.toggle("note_data_input_hidden");
        noteSelected.classList.toggle("note_data_input_hidden");
    }
 
    setTimeout(console.log("press and held!", 5000));

}noteContainer.addEventListener('mousedown', selectNote);
*/

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

  createBtn.classList.remove("key_value_section_hidden");

  keyValueSection.classList.add("key_value_section_hidden");
}addToLocalBtn.addEventListener('click', addToLocal);

    






//localStorage.clear()
