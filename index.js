function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let numbers = document.querySelectorAll('.ranked-list li');
  for(var i = 0; i < numbers.length; i++) {
    let toNum = parseInt(numbers[i].innerHTML)
    numbers[i].innerHTML = toNum + n;
  }
}

function deepestChild(){
  let parentNode = document.getElementById('grand-node');
  // assigning first child only to childNode, as each div has only one child element
  let childNode = parentNode.children[0];

  while(childNode){
    parentNode = childNode
    childNode = parentNode.children[0];
  }
  return parentNode;
}
