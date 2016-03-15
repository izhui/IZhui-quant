## IZhui-quant

    npm install izhui-quant
    
### Tree    
#### Example

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
        }
    ]
    
    var tree = new Tree(list, '·');
    
    console.log("深交所:股票", tree.getChildsByName('策略', '深交所', '股票'))
    console.log("深交所:指数", tree.getChildsByName('策略', '深交所', '指数'))
    console.log("上交所:股票", tree.getChildsByName('策略', '上交所', '股票'))
    console.log("上交所:指数", tree.getChildsByName('策略', '上交所', '指数'))

#### console

    深交所:股票 [ { id: '0·2·5·7',
        key: 'QUANT·SZSE·STOCK·SYFT',
        name: '策略·深交所·股票·三阴反弹',
        detail: '三阴反弹' } ]
    深交所:指数 [ { id: '0·2·6·7',
        key: 'QUANT·SZSE·INDEX·SYFT',
        name: '策略·深交所·指数·三阴反弹',
        detail: '三阴反弹' } ]
    上交所:股票 [ { id: '0·3·5·7',
        key: 'QUANT·SSE·STOCK·SYFT',
        name: '策略·上交所·股票·三阴反弹',
        detail: '三阴反弹' } ]
    上交所:指数 [ { id: '0·3·6·7',
        key: 'QUANT·SSE·INDEX·SYFT',
        name: '策略·上交所·指数·三阴反弹',
        detail: '三阴反弹' } ]