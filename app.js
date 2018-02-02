
//Budget Controller
var budgetController = (function(){


})();

//UI Controller
var UIController =(function(){

})();


//Global APP controller
var controller =(function(budgetCtrl, UICtrl){

   var ctrlAddItem = function(){
     // get input data ..after click
     // add item to budget controller...and UI too..display on UI
console.log('wroks');
   }
   //event listeners
 document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);
document.addEventListener('keypress', function(event){
  if(event.keyCode === 13){
    ctrlAddItem();

  }


});
}) (budgetController, UIController);
