
function MenuItem(PName, Kcal, gluten, lactose, nuts, img){
this.name = PName;
this.Kcal = Kcal;
this.gluten = gluten;
this.lactose = lactose;
this.nuts = nuts;
this.img = img;


  };
function GetKundInfo(){
  var email = document.getElementById("email").value;
  var full_name = document.getElementById("full name").value;
  var payment = document.getElementById("Payment").value;
  var gender_list =document.getElementsByName("gender");
  var gender = null;
  for (i=0; i< gender_list.length; i++){
      if(gender_list[i].checked){
     gender = gender_list[i].value;
    }
  }
  //var location = document.getElementById("location").value;
  var order = [email, full_name, payment, gender]
  return order;
}

function GetSelsectedBurgers(){
  var allBurgers = document.getElementsByName("checkbox");
  var selectedBurgers = [];
  for (i=0; i< allBurgers.length; i++){
      if(allBurgers[i].checked){
     selectedBurgers.push( " " + allBurgers[i].value);
    }
  }
  return selectedBurgers;
}
// function GetLocation(){
//   var x =
// }


var product1 = new MenuItem('BurgerSauosss', 500, true, true, false, "https://commentform.marketforce.com/images/BK-WebComment/BB_WHOPPER-v1.png" )
var product2 = new MenuItem('BurgerVegan', 400, false, false, true, "https://huggysbar.com/wp-content/uploads/2019/06/Classic-Burger.png" )
var product3 = new MenuItem('BurgerSauosss2', 500, true, true, false, "https://commentform.marketforce.com/images/BK-WebComment/BB_WHOPPER-v1.png" )
var product4 = new MenuItem('BurgerPlain', 500, true, true, false, "https://lh3.googleusercontent.com/i-vHb3CryeDkJrTydwmJFJ1M1HrFtjAGIDC5xI7wI7bkOqV_iV0Zpr6jtm-9Lmv6n1pgkMBhJHSb2Ef1XMxLEQ=s400" )
var product5 = new MenuItem('BurgerX2', 500, true, true, true, "https://www.yohburger.com/wp-content/uploads/empire-state-burger.png" )


window.onload = function(){
 var vm = new Vue({
  el: '#VueContainer',
  data: {
    burgers:
    [{name: "BurgerSauosss", stock: 5},
    {name: "BurgerVegan", stock:2},
    {name: "BurgerSaousss2", stock: 4},
    {name: "Item4", stock: 0 },
    {name: "Item5", stock: 1 }],
    Menu:
    [product1, product2, product3, product4, product5],
    clicked: false,
    orders: {},
    newOrder:{}
  },

  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));

},
    methods: {
        ButtonPressed: async function() {
          console.log("Button clicked!");
          this.clicked = true;
          console.log(this.clicked);
          this.KundInfo = GetKundInfo();
          console.log(this.KundInfo);
          this.SelectedBurgers = GetSelsectedBurgers();
          console.log(this.SelectedBurgers);
        await this.addOrder();



    },
    // getNext: function () {
    //    var lastOrder = Object.keys(this.orders).reduce( function (last, next) {
    //      return Math.max(last, next);
    //    }, 0);
    //    return lastOrder + 1;
    //  },
     addOrder: async function (event) {
       console.log(event);
       await socket.emit("addOrder", { details: this.orders.details,
                                 orderItems: this.SelectedBurgers,
                                 orderInfo: this.KundInfo
                               });

                               console.log(this.KundInfo);
     },
     displayOrder: function(event){
       console.log(event);
       this.orders = ({details: {
          x: event.clientX-10 - event.currentTarget.getBoundingClientRect().left,
          y: event.clientY-10 - event.currentTarget.getBoundingClientRect().top},


       })
       console.log(this.orders);
       console.log(this.newOrder);
       console.log(this.orders.details.x);
     }
   }




 })
}
