exports.fn = {
  // cpSearch
  cpSearch: v => {
    getCPContent(
      'tmall',
      {
        selector: '#J_ItemList .product-iWrap .productTitle a',
        attr: { text: 'innerText', href: 'href' }
      },
      j => {
        page: j + 1
      }
    )
  }
}
