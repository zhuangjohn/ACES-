exports.fn = {
  sleepGoByTime(sleepTime, goByTimeSet,fn) {
    $f.sleep(sleepTime).then(()=>{
      $f.goByTime(goByTimeSet,fn)
    })
  }
}
