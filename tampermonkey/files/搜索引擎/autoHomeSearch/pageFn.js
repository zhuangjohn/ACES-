exports.fn = {
  // cpSearch
  cpSearch: v => {
    getCPContent('autoHomeSearch',{
      selector:'#cresult dt a',
      attr:{title:'innerText',a:'href'}
  },j=>{page:j+1},true)
  }
}
