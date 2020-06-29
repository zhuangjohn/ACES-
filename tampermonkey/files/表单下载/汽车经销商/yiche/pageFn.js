exports.fn = {
  // list
  list: v => {
    $f.sleep(500).then(() => {
      $page.getList(['yiche'])
    })
  }
}
