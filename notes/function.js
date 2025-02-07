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
      noteDataTitle.classList.add("title_stylings");
        noteDataTitle.innerHTML = noteData.title;
    
       

      

       // let noteDataBodyWrap = document.createElement("div");
        
        
         let noteDataBody = document.createElement("div");
             noteDataBody.classList.add("content_stylings");
             noteDataBody.innerHTML = noteData.htmlMarkup;

    
      

       // noteDataBody.replaceWith(noteData.htmlMarkup);
      
      // noteDataBodyWrap.append(noteDataBody);
      // noteDataBody.outerHTML = noteData.htmlMarkup;
    
    
      /* 
       let noteDataTitleInput = document.createElement("input");
        //noteDataTitleInput.textContent = notes.title;
        noteDataTitleInput.type = "text";
        noteDataTitleInput.classList.add("note_data_input_hidden");
    
       let noteDataBodyInput = document.createElement("input");
       // noteDataBodyInput.textContent = notes.body;
        noteDataBodyInput.type = "text";
        noteDataBodyInput.classList.add("note_data_input_hidden");
    */
       let noteDataEdit = document.createElement("button");
        noteDataEdit.classList.add("edit_btn");
        noteDataEdit.textContent = "Edit";
    
       let noteDeleteBtn = document.createElement("button");
        noteDeleteBtn.textContent = 'delete';
       


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
  

    
      let noteDataSave = document.createElement("button");
        noteDataSave.classList.add("note_data_input_hidden");
        noteDataSave.textContent = "Save";
    
     noteContainer.append(noteSelected, noteDataTitle, noteDataBody, toolBar, noteDataEdit, noteDeleteBtn, noteDataSave);
    
    noteSection.append(noteContainer);

       
      
    function edit(){ 
      noteDataBody.focus();
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
     

      /* possible changes to edit function.

        change edit() function from stored input value to itself(maybe).

        maybe store the value still but don't display it in the DOM.
      */

        toolBar.classList.remove('note_data_input_hidden');
        

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
      
      noteDeleteBtn.classList.remove("note_data_input_hidden");

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
    function boldFunction(){ 

   

  
    document.execCommand('bold', false, null);
    // const boldText = document.createElement('b');

    bold.classList.remove("note_data_input_hidden");
    
   

  }bold.addEventListener('click', boldFunction);
 
  */
    
function saveNote(){
  testArray = JSON.parse(localStorage.getItem('allNotes')); // parse storage beforehand

 // let noteDataTitleSave = noteDataTitle.textContent;   // noteDataTitleInput.value;
//  let noteDataBodySave = noteDataBody.textContent;

  noteDataSave.classList.add("note_data_input_hidden");//button
  noteDataSave.classList.remove("note_data_input_active");

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
        //"markup": markup.innerHTML
       // bhtml: markup.className
       // bodyMarkup: bodyHTML.value
    /* idea 1 - I might can store the outerhtml of title and body,
         so they can keep potential class styling and text formatting options (bolding, underlining, text-positioning etc.).
         Then, when I edit, I can add a function to take the...


        idea 2 -  I might want to store the outerhtml as the key and title values instead
        
         
    */
    }


 //IMPORTANT NOTE: USE A CONTENT EDITABLE DIV INSTEAD OF A TEXTAREA OR INPUT FIELD. 
 // AND CHANGE THE ADD AND EDIT FUNCTION SO THAT IN "VIEWING MODE" THE DIV IS SIMPLY UNEDITABLE, BUT WHEN CLICKING ON THE DIV,
 // IT BECOMES EDITABLE.
 // EXPAND ON THE ADD FUNCTION BY DETECTING IF AN IMG HAS BEEN ADDED, AND IF SO CONVERT IT INTO A BASE 64STRING(I THINK?), AND SETTING IT TO AN PROPERTY CALLED "NOTE-IMAGES"
 // A POSSIBLE SOLUTION MIGHT BE TO CREATE AN ARRAY FOR IMGS IN THE NOTES OBJECT, (BETTER TO ASSUME SOMEONE'LL HAVE MULTIPLE IMGS INSTEAD OF ONE).  

 // MAKE A "CANVAS MODE" AS WELL FOR DRAWING CAPACITY, LATER ON THOUGH.

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
   
   
  // noteDataTitle.outerHTML = notes.titleMarkup;
   

    selectedBtnTitleWrap.append(/*noteSelected,*/ noteDataTitle);
    /*
    let noteDataTitle = document.createElement("p");
    noteDataTitle.innerHTML = notes.title;
    */


    // start textstyling

   
  
    // end 

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
    
    //localStorage.setItem('allNotes', JSON.stringify(testArray.notes.titleMarkup.outerHTML));
   // localStorage.setItem('allNotes', JSON.stringify(testArray.notes.bodyMarkup.outerHTML));    

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
   
    

    /* function edit v2
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
       

        /*
            change edit() function to use
        

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
        
    */

    /* function edit v1
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
    
    */



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
   

/* v1

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
  

*/

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
      
}addToLocalBtn.addEventListener('click', addToLocal);

    



/*


*/

   

//localStorage.clear()
/*make 2 functions*/
// 1. function for editing notes that also updates local storage.
// 2. function for deleting notes, both from the dom and from localstorage.
