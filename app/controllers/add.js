Ti.include("/lib/autocomplete.js");

var autoComplete = AutoComplete();
var autoCompleteWithOptions = AutoComplete();
var tags = [
  "ActionScript",
  "AppleScript",
  "Asp",
  "BASIC",
  "C",
  "C++",
  "Clojure",
  "COBOL",
  "ColdFusion",
  "Erlang",
  "Fortran",
  "Groovy",
  "Haskell",
  "Java",
  "JavaScript",
  "Lisp",
  "Perl",
  "PHP",
  "Python",
  "Ruby",
  "Scala",
  "Scheme"
];

// INIT
// var t = $.address.getTop();
// var w = $.address.getHeight();
// 
// //$.addressCompletion.top = $.address.top + $.address.height;
// $.addressCompletion.setTop(t = w);


// var t1 = Ti.UI.createTextField({ width:"300", height:35, top:10, borderWidth:1, borderColor:"lightGray" });
// var t2 = Ti.UI.createTextField({ width:"300", height:35, top:20, borderWidth:1, borderColor:"lightGray" });
// 
// var t2_options = { color: 'white', borderColor: 'black', backgroundColor: 'darkGray', animationSpeed:1000 };
// 
// //Auto Complete with Default Options
// autoComplete.init(tags, $.address, $.body);
//Auto Complete with Custom Options
//autoCompleteWithOptions.initWithOptions(tags, t2, $.main, t2_options);


function addItem() {
    var todos = Alloy.Collections.todo;

    // Create a new model for the todo collection
    var task = Alloy.createModel('Todo', {
        item : $.message.value,
        done : 0
    });

    // add new model to the global collection
    todos.add(task);

    // save the model to persistent storage
    task.save();

    // reload the tasks
    todos.fetch();

    closeWindow();
}

function onAddressFocus(e) {
	$.addressCompletion.show();
	// $.addressCompletion.data = ['aaa', 'bbbb'];
}

function onAddressBlur(e) {
	$.addressCompletion.hide();
}

function focusMessage() {
    $.address.focus();
}

function closeKeyboard(e) {
    e.source.blur();
}

function closeWindow() {
    $.addWin.close();
}