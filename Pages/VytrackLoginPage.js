var Elements = function(){
   this.UserName = element(by.id("prependedInput")); 
   this.password = element(by.id("prependedInput2"));
   this.button = element(by.xpath("//button[@type='submit']"));

};

module.exports = new Elements();