//Budget Controller
var budgetController = (function() {})();

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
      var DOM =UICtrl.getDOMstrings();
      var ctrlAddItem = function() {

        // get input data ..after click
        var input = UICtrl.getInput();
        console.log(input);

        // add item to budget controller...

        //Add UI too..display on UI

      }

      //event listeners
      document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
      document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13) {
          ctrlAddItem();

        }
      });
    })(budgetController, UIController);
