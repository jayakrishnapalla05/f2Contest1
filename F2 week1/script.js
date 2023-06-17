let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((item) =>{
        if(item.profession === 'developer'){
            console.log(item);
        }
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((item) =>{
        if(item.profession === 'developer')
        {
            console.log(item);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    let ans=[{id:4,name:"susan",age:"20",profession:"intern"}];
    arr.push(ans);
    console.log(arr);

  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter((item) =>{
        if(item.profession !== 'admin'){
            console.log(item);
        }
    });
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArray=[
        { id: 5, name: "Surya", age: "12", profession: "Software developer" },
        { id: 6, name: "Karthik", age: "29", profession: "software Tester" },
        { id: 7, name: "Johnson", age: "49", profession: "salesforce" },
      ];
   let ans=arr.concat(newArray);
   console.log(ans);

  }