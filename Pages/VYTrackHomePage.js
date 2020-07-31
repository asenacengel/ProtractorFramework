


 var Elements = function(){
    this.Fleet =element(by.xpath("//ul[@class='nav-multilevel main-menu']//a[@href='#']/span[contains(.,'Fleet')]"));
    this.Vehicles = element(by.xpath("//span[.='Vehicles']"));
   
 }
 module.exports = new Elements();


 var allButtons = function(){
     this.AllButton = element(by.xpath("//div[@class='btn-group dropdown open']//i[@class='caret']"));
     this.selectAllButton = element(by.css("a[data-select-all]"));
 }
 module.exports = new allButtons();