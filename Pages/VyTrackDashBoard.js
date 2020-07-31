var Elements = function(){

    this.dashboard = element(by.xpath("//span[@class='title title-level-1' and contains (text(),' Dashboards')]"));
    this.dashboardButton  = element(by.xpath("//span[@class='title title-level-2' and contains (text(),' Dashboards')]"));
    this.accountButton = element(by.xpath("//span[@class='title-box' and contains(text(),'Accounts')]"));
    this.allCheckBox = element(by.css("th.select-all-header-cell .caret"));
    this.allButton = element(by.xpath("//a[.='All']"));
    this.allVisibleButton = element(by.xpath("//a[.='All visible']"));
    this.noneButton = element(by.xpath("//a[.='None']"))
    this.clickAccount = element(by.xpath("//td[.='customer_test']"));
    this.general = element(by.xpath("//a[.='General']"));
    this.activity = element(by.xpath("//a[.='Activity']"));
    this.activityText = element(by.xpath("//span[.='No activities found']"));
    this.opportunities = element(by.xpath("//li[@class='active']"));
    this.opText = element(by.xpath("//div[@class='scrollspy container-fluid scrollable-container']//div[@class='form-horizontal']/div[@class='responsive-cell responsive-cell-no-blocks']//span[.='No records found']"));
    this.additionalInfo = element(by.xpath("//a[.='Additional Information']"));
    this.additionalText = element(by.xpath("//div[@class='box-type1 list-widget']//span[.='No records found']"));
    this.option = element(by.xpath("//div[@class='btn btn-link dropdown-toggle']"));
    this.save_as = element(by.xpath("//a[@class='save_as']"));
    this.name = element(by.xpath("//input[@id='gridViewName']"));
    this.saveButton = element(by.xpath("//a[@class='btn ok btn-primary']"));
    this.deleteButton = element(by.xpath("//a[.='Delete']"));
    this.yesDeleteButton = element(by.xpath("//a[@class='btn ok btn-danger']"));


}
module.exports = new Elements();