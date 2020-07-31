describe(" Test Group 1" , function(){

    beforeAll(function(){
        console.log("Test Group 1 started");
    });
    beforeEach(function(){
        console.log("Test Case Started");
    });
it("Test Case 1",function(){

    console.log("Test Case 1 completed");
});

it("Tset Case 2",function(){

console.log("Test Case 2 completed");

})
afterEach(function(){
  console.log("Test Case ended");
});

afterAll(function(){
    console.log("Test Group 1 finished");
});
});