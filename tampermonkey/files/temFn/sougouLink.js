exports.fn = {
  //获取永久链接
  sougouLinkTrans(temLink) {
    return new Promise((goto, failto) => {
      GM_xmlhttpRequest({
        url: temLink,
        onload: function(res) {
          let fun = $f.deepReg(res.responseText, /var url[\d|\D]+?url.replace\("@", ""\)/)[0]
          eval(fun)
          try {
            goto(url)
          } catch (e) {
            let url = ''
            goto(url)
            failto(url)
          }
        }
      })
    })
  }
}
