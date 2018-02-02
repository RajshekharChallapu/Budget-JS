//Budget Controller
var budgetController = (function() {
    var Expense  = function(id, description,value){
      //Constructor
      this.id= id;
      this.description=description;
      this.value= value;
    };
    var Income  = function(id, description,value){
      this.id= id;
      this.description=description;
      this.value= value;
    };
//DATA Structures
    var data ={
      allItems:{
        exp:[],
        inc:[]

      },
      totals:{
        exp:0,
        inc:0
      }

    };

})();



//UI Controller
var UIController = (function() {
var DOMstrings={
  inputType:'.add__type',
  inputDescription: '.add__description',
  inputValue:'.add__value',
  inputBtn:'.add__btn'
};

  return {
    getinput: function() {
      return {
           type: document.querySelector(DOMstrings.inputType).value, // will inc either exp
           description: documnet.querySelector(DOMstrings.inputDescription).value,
          value: document.querySelector(DOMstrings.inputValue).value
          };
        },
        getDOMstrings: function(){
          return DOMstrings;
        }
      };
    })();

    //Global APP CONTROLLER
    var controller = (function(budgetCtrl, UICtrl) {
      var setupEventListeners =function(){
          var DOM =UICtrl.getDOMstrings();
        //event listeners
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {

          if (event.keyCode === 13) {
            ctrlAddItem();

          }
        });


      }

      var ctrlAddItem = function() {

        // get input data ..after click
        var input = UICtrl.getInput();


        // add item to budget controller...

        //Add UI too..display on UI

      };
return {
  init: function(){
    console.log('Application has started.');
    setupEventListeners();
  }
};

    })(budgetController, UIController);
controller.init();
