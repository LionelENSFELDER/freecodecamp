function rot13(str) {
  const caractArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  
  return str.split('').map(function(item){
    let itemPosition = caractArray.indexOf(item);//return position or -1
    return itemPosition >= 0 ? caractArray[(itemPosition + 13) % 26] : item;
  }).join("");


}

rot13("SERR PBQR PNZC"); //FREE CODE CAMP
rot13("SERR CVMMN!");//FREE PIZZA!