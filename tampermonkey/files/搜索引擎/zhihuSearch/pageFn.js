exports.fn = {
  // cpSearch
  cpSearch: v => {
    getCPContent(
      'zhihuSearch',
      {
        selector: '.ContentItem-title a',
        attr: { title: 'innerText', a: 'href' }
      },
      j => ''
    )
  }
}
