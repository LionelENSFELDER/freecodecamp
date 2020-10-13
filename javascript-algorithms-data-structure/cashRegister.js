function checkCashRegister(price, cash, cid) {

    let changeDue = cash - price;
    console.log("changeDue=" + changeDue);
  
  
    const cashAmount = function(cid){
      let result = 0;
      for (let i = 0; i < cid.length; i++){
        result += cid[i][1];
      }
      return result.toFixed(2);
    }
    const cashInDrawer = cashAmount(cid);
    console.log("cashInDrawer= " + cashInDrawer);
  
  
    const hydrateChange = function(){
      const newCid = cid.reverse();
      console.log(newCid);
      return []
      
    }
  
  
    var drawerResponse = function(changeDue, cashInDrawer){
      if(changeDue > cashInDrawer){
        console.log({status: "INSUFFICIENT_FUNDS", change: []})
      }else if(changeDue == cashInDrawer){
        console.log({status: "CLOSED", change: hydrateChange()})
      }else{
        console.log({status: "OPEN", change: hydrateChange()})
      }
    }
  
  
    return drawerResponse(changeDue, cashInDrawer);
  
  
    // var change;
    // return change;
  }
  
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
  
  