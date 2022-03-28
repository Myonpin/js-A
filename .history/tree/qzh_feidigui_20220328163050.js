const bt = require('./bt')




//节点的左子树遍历完毕，到再去遍历右子树的时候，才输出
// const in_order = (root) => {
//   if (!root) return
//   const stack = []
//   let p = root

//   while (stack.length || p) {
//     while (p) {
//       stack.push(p)
//       p = p.left
//     }
//     const n = stack.pop()  //弹出遍历完左子树的节点，输出
//     console.log(n.val) 
//     p = n.right
//   }
// }
// in_order(bt)

const pre_order = (root) => {
  if (!root) return
  const stack = [root]

  while (stack.length) {
    const n = stack.pop()
    console.log(n.val)
    //后进先出
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
  }



}
pre_order(bt)




//先序是  左 右 根   后序是根 右 左 
//可以按先序的方式先根 右 左 然后再倒序输出
const post_order = (root) => {
  if(!root) return
  const outputStack = []
  const stack = [root]
  while (stack.length) {
    const n = stack.pop()
    outputStack.push(n)
    //后进先出
    if (n.left) stack.push(n.left)
    if (n.right) stack.push(n.right)
  }
  while(outputStack.length){
    const n = outputStack.pop()
    console.log(n.val)
  }
}

post_order(bt)