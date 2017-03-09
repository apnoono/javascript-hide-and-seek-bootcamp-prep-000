function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested')
}

function deepestChild() {
  let nodeList = document.getElementById("grand-node").querySelectorAll("div")

  return nodeList[nodeList.length - 1]
}

function increaseRankBy(n) {
  let nodeList = document.getElementById("app").querySelectorAll("ul.ranked-list li")

  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].innerHTML = parseInt(nodeList[i].innerHTML, 10) + n
  }
}
