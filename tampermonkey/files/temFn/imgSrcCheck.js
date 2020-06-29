exports.fn = {
  imgSrcCheck(node, arr) {
    arr = $f.toArray(arr)
    arr.map(v => {
      if (!$f.isErr(node[v])) {
        node.src = node[v]
      }
    })
  }
}
