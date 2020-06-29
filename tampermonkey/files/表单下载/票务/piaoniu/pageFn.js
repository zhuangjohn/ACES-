exports.fn = {
  // list
  list: v => {
    $f.sleep(500).then(() => {
      $f.safe(() => {
        $page.getList(['piaoniu'])
      })
    })
  }
}
