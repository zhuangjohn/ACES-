$page.setListConfig({
    baiduSearchRes: {
      table: '#content_left',
      tr: '.result',
      td: ['.t', '.c-abstract', '.f13']
    },
    sougou: {
      table: '#wrapper',
      tr: '.news-list li',
      td: ['h3 a', '.txt-info', '.s-p a', '.s-p span']
    },
    magi: {
      table: 'main',
      tr: '.card',
      td: ['h3', 'time', 'cite', 'p']
    },
    qimai_globalrank: {
      table: '.data-table',
      tr: 'tr',
      td: ['td', 'th']
    },
    qimai_float: {
      table: 'table',
      tr: 'tr',
      td: ['td', 'th']
    },
    mapbar: {
      table: '.sortC',
      tr: 'dd',
      td: ['a']
    },
    souhu: {
      table: '.area_box table,.sales_box',
      tr: 'tr',
      td: ['td', 'th']
    },
    autoHomeProduct: {
      table: '.brandtab-cont',
      tr: '.list-cont-bg',
      td: ['.main-title .font-bold', '.main-title .score-cont', '.main-lever-right>div:nth-child(1)', 'li']
    },
    autoHomeSearchRes: {
      table: '.result-list',
      tr: '.list-dl',
      td: ['dt a', 'dd']
    },
    autoHomeBrandmatrix: {
      table: '.main',
      tr: '.info',
      td: ['h3', '.intro', '.more-l.span', '.more-r span']
    },
    dcdapp: {
      table: '.container',
      tr: '.info',
      td: ['.title', '.footer span']
    },
    pcauto: {
      table: '.listTb',
      tr: '.liFc',
      td: ['p']
    },
    dealers: {
      table: '.list-box',
      tr: '.list-item',
      td: ['.info-wrap li', 'a']
    },
    yiche: {
      table: '.dealer-box',
      tr: '>div',
      td: ['h6 a', 'p']
    },
    newrank: {
      table: 'html',
      tr: '#table_header',
      td: ['th']
    },
    chuanboyi: {
      table: '#list_content',
      tr: 'tr',
      td: ['th', 'td']
    },
    pharmnet: {
      table: '#center',
      tr: 'ul',
      td: ['li']
    },
    pharmnetCompany: {
      table: '#right',
      tr: 'ul',
      td: ['li']
    },
    piaoniu: {
      table: '.results-container',
      tr: '.item .info',
      td: ['>div', '>a']
    },
    huodongxing: {
      table: '.search-tab-content-list-check',
      tr: '.search-tab-content-item-mesh',
      td: [
        '>a div >.date-pp',
        '>a .item-mesh-conter .item-title',
        '>a .item-mesh-conter .item-dress',
        '>a .item-bottom-left',
        '.browse-div'
      ]
    },
    sasa: {
      table: '.content',
      tr: '.category li',
      td: ['.sub-category a']
    },
    tmall: {
      table: '#content',
      tr: '.item',
      td: ['.detail .item-name', '>dd .sale-area', '>dd .cprice-area', '>dd .title']
    },
    bilibili: {
      table: '.video-list',
      tr: 'li',
      td: ['.title', '.watch-num', '.time', '.up-name', '.so-imgTag_rb']
    },
    cuo: {},
    event_tap: {
      table: '.category-search',
      tr: '.v-expansion-panel__container',
      td: ['.title-text', '.v-btn__content']
    },
    alibaba_tap: {
      table: '.menu-body',
      tr: 'ul',
      td: ['h1', 'h2', 'li']
    },
    lianjiaCity: {
      table: '.city_selection_section',
      tr: 'li',
      td: ['a']
    }
  })