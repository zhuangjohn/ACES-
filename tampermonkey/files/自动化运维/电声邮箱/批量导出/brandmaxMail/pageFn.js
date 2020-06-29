exports.fn ={
  outMail:()=>{
    let timeSet=[6000,6000*60]
    sleepGoByTime(500,timeSet,()=>{
      $('.nui-chk-symbol')[0].click()
    })
    sleepGoByTime(1000,timeSet,()=>{
      $('.nui-dropdownBtn-arr')[3].click()
    })
    sleepGoByTime(1500,timeSet,()=>{
      $f.filter($('.nui-menu-item-link .nui-menu-item-text'),v=>/导出/.test(v.innerText))[0].click()
    })
    sleepGoByTime(3500,timeSet,()=>{
      $('.nui-btn-icon')[5].click()
    })
  }
}