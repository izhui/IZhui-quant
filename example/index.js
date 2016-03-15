/**
 * Created by cavasblack on 16/3/14.
 */
var Tree = require('../').Tree;
var list = [
    {
        id: 1,
        parents: [0],
        name: '中金所',
        detail: '中金所',
        key: 'CFFEX'
    },
    {
        id: 2,
        parents: [0],
        name: '深交所',
        detail: '详情',
        key: 'SZSE',
    },
    {
        id: 3,
        parents: [0],
        name: '上交所',
        detail: '详情',
        key: 'SSE'
    },
    {
        id: 4,
        parents: [1],
        name: '股指期货',
        detail: '股指期货',
        key: 'INDEXFUTURES'
    },
    {
        id: 5,
        parents: [2, 3],
        name: '股票',
        detail: '股票',
        key: 'STOCK'
    },
    {
        id: 6,
        parents: [2, 3],
        name: '指数',
        detail: '指数',
        key: 'INDEX'
    },
    {
        id: 7,
        parents: [4, 5, 6],
        name: '三阴反弹',
        detail: '三阴反弹',
        key: 'SYFT'
    },
    //{
    //    id: 8,
    //    parents: [4, 5, 6],
    //    name: '多空力量',
    //    detail: '多空力量',
    //    key: 'DKLL'
    //}
]

var tree = new Tree(list, '·');
//console.log("中金所", tree.getChildsByName('策略', '中金所'))
//console.log("策略", tree.getChildsByName('策略'))
//console.log("深交所", tree.getChildsByName('策略', '深交所'))
//
//console.log("上交所", tree.getChildsByName('策略', '上交所'))
//console.log("中金所", tree.getChildsByName('策略', '中金所'))

console.log("深交所:股票", tree.getChildsByName('策略', '深交所', '股票'))
console.log("深交所:指数", tree.getChildsByName('策略', '深交所', '指数'))
console.log("上交所:股票", tree.getChildsByName('策略', '上交所', '股票'))
console.log("上交所:指数", tree.getChildsByName('策略', '上交所', '指数'))