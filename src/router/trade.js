
export default {
    path:'/trade/',
    name: 'TradeParent',
    component: resolve => require(['../pages/trade/TradeParent.vue'], resolve),
    redirect: { name: 'TradeCenter' },
    children: [
        {
            path: 'center',
            name: 'TradeCenter',
            component: resolve => require(['../pages/trade/TradeCenter.vue'], resolve)
          },
          {
            path: 'view',
            name: 'Trade',
            component: resolve => require(['../pages/trade/Trade.vue'], resolve)
          },
          {
            path: 'buy',
            name: 'TradeBuy',
            component: resolve => require(['../pages/trade/TradeBuy.vue'], resolve)
          },
          {
            path: 'sell',
            name: 'TradeSell',
            component: resolve => require(['../pages/trade/TradeSell.vue'], resolve)
          }
    ]
}