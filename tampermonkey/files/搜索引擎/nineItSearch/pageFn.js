exports.fn = {
  //新开页面
  newPage: v => {
    $f.sleep(800).then(() => {
      $f.faceArr($('.rows .row >a'), (v, i) => {
        v.click()
      })
    })
  }
}
