function checkCashRegister(price, cash, cid) {

  const currencies = [
    {name:"ONE HUNDRED", value:100},
    {name:"TWENTY", value:20},
    {name:"TEN", value:10},
    {name:"FIVE", value:5},
    {name:"ONE", value:1},
    {name:"QUARTER", value:0.25},
    {name:"DIME", value:0.10},
    {name:"NICKEL", value:0.05},
    {name:"PENNY", value:0.01},
  ]

    let changeDue = (cash - price);
    console.log("=> changeDue= " + changeDue + " =>: "+ typeof changeDue);
  
  
    const cashAmount = function(cid){
      let result = 0;
      for (let i = 0; i < cid.length; i++){
        result += cid[i][1];
      }
      return Math.round(result * 100) / 100;
    }
    const cashInDrawer = cashAmount(cid);
    console.log("=> cashInDrawer=" + cashInDrawer + " => " + typeof cashInDrawer);
  
  
  function hydrateChange(){
      let changeArray = [];
      let newCid = cid.reverse();
      //console.log(newCid);

      let tempChangeDue = changeDue;
      console.log("=> tempChangeDue= " + tempChangeDue + " => " + typeof tempChangeDue);

      currencies.forEach(function(i, index){
        //console.log(i.name + "passed")
        if(i.value <= tempChangeDue && tempChangeDue >= 0){
          //console.log(i.name + "tested")
          let availableUnit = newCid[index][1];
          let valueToPush = 0;
          while(availableUnit > 0.00 && (tempChangeDue - i.value) >= 0.00){
            tempChangeDue -= i.value;
            //tempChangeDue = Number.parseFloat(tempChangeDue).toFixed(2);
            tempChangeDue = Math.round(tempChangeDue * 100) / 100;
            availableUnit -= i.value;
            availableUnit = Math.round(availableUnit * 100) / 100;
            valueToPush += i.value;
            valueToPush = Math.round(valueToPush * 100) / 100;
          }
          //console.log("index=" + newCid[index][0] + " valueToPush=" + valueToPush);
          if(valueToPush > 0.00){
            changeArray.push([newCid[index][0], valueToPush]);
          }
          
        }
      })
      return changeArray;
      
    }

    const hydrate = hydrateChange();
    console.log("hydrate= " + hydrate);
  
  
    const drawerResponse = function(changeDue, cashInDrawer){

      //let changeArrayFromHydrate = hydrateChange();
      

      function sum(){
        let result = 0;
        for (let i = 0; i < hydrate.length; i++){
          result += hydrate[i][1];
          result = Math.round(result * 100) / 100;
        }
        //console.log("result=" + result + typeof result)
        return result
      }
      //console.log("sum()=" + sum())

      
      
      
      if(changeDue > cashInDrawer || sum() < changeDue){
        return{status: "INSUFFICIENT_FUNDS", change: []}
      }else if(changeDue == cashInDrawer){
        return{status: "CLOSED", change: [...cid].reverse()}
      }else{
        return{status: "OPEN", change: hydrate}
      }

    }
  
    console.log(drawerResponse(changeDue, cashInDrawer));
    return drawerResponse(changeDue, cashInDrawer);
  
  
    // var change;
    // return change;
  }

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}