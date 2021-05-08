function MenuItem(PName, Kcal, gluten, lactose, nuts){
this.name = PName;
this.Kcal = Kcal;
this.gluten = gluten;
this.lactose = lactose;
this.nuts = nuts;
this.ProductInf = function () {
     return this.name + ' ' + this.calories + ' ' + this.gluten +
        ' ' + this.lactose + ' ' + this.vegan;

  };
}
var product1 = new MenuItem('BurgerSauosss', 500, true, true, false )
var product2 = new MenuItem('BurgerVegan', 400, false, false, true )
var product3 = new MenuItem('BurgerSauosss2', 500, true, true, false )
var product4 = new MenuItem('Item4', 500, true, true, false )
var product5 = new MenuItem('Item5', 500, true, true, false )
