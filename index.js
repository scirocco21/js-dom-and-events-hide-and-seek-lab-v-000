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

function deepestChild() {
  let last;
  let childrens = document.getElementById('grand-node').children;
  for(let i = 0; i <childrens.length; i++) {
    if (childrens[i].nextSibling) {
      last = childrens[i]
    } else {
      return last.outerHTML;
    }
  }
}
//   let n = document.getElementById('grand-node');
//
//   while (n.hasChildNodes()) {
// 	  n = n.firstChild
//   }
//   return n;
// }
