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

    let changeDue = Number.parseFloat(cash - price).toFixed(2);
    console.log("=> changeDue=" + changeDue);
  
  
    const cashAmount = function(cid){
      let result = 0;
      for (let i = 0; i < cid.length; i++){
        result += cid[i][1];
      }
      return result.toFixed(2);
    }
    const cashInDrawer = cashAmount(cid);
    console.log("=> cashInDrawer= " + cashInDrawer);
  
  
    const hydrateChange = function(){
      let changeArray = [];
      let newCid = cid.reverse();
      //console.log(newCid);

      let tempChangeDue = Number.parseFloat(changeDue).toFixed(2);
      console.log("=> tempChangeDue= " + tempChangeDue);

      currencies.forEach(function(i, index){
        if(i.value <= tempChangeDue && tempChangeDue >= 0){
          let availableUnit = newCid[index][1];
          let valueToPush = 0;
          while(availableUnit > 0.00 && (tempChangeDue - i.value) >= 0.00){
            tempChangeDue -= i.value;
            tempChangeDue = Number.parseFloat(tempChangeDue).toFixed(2);
            availableUnit -= i.value;
            valueToPush += i.value;
            valueToPush = Number.parseFloat(valueToPush).toFixed(2);
          }
          if(valueToPush > 0.00){
            changeArray.push([newCid[index][0], valueToPush]);
          }
          
        }
      })
      return changeArray;
      
    }
  
  
    var drawerResponse = function(changeDue, cashInDrawer){
      let changeArray = hydrateChange();
      let canIBackMoney = (function(changeArray){
        for (let i = 0; i < changeArray.length; i++){
        result += changeArray[i][1];
        }
        return result.toFixed(2);
      })()
      
      

      if(changeDue > cashInDrawer){
        return{status: "INSUFFICIENT_FUNDS", change: []}
      }else if(changeDue == cashInDrawer){
        return{status: "CLOSED", change: hydrateChange()}
      }else{
        return{status: "OPEN", change: hydrateChange()}
      }
    }
  
    console.log(drawerResponse(changeDue, cashInDrawer));
    //return drawerResponse(changeDue, cashInDrawer);
  
  
    // var change;
    // return change;
  }

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])