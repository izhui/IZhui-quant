/**
 * Created by cavasblack on 16/3/15.
 */
var Class = require('osr-class');

var Tree = Class.extends({
    $: function (list, append) {
        this.list = list;
        this.maps = {};
        this.keymaps = {};
        this.append = append || '__@__';
        this.init();
    },
    init: function () {
        var self = this;
        this.list.sort(function (a, b) {
            return a.parents.join(this.append) > b.parents.join(this.append) ? 1 : -1;
        });
        this.list.forEach(function (item, index) {
            if (undefined == item.parents) {
                item.parents = [0];
            }
            item.parents.forEach(function (parent, index) {
                var _parent = self.getParent(parent);
                _parent.forEach(function (pitem, index) {
                    var _id = pitem.id + self.append + item.id;
                    var _key = pitem.key + self.append + item.key;
                    var _name = pitem.name + self.append + item.name;
                    self.maps[_id] = {
                        id: _id,
                        key: _key,
                        name: _name,
                        detail: item.detail
                    }
                    if (!self.keymaps[item.id]) {
                        self.keymaps[item.id] = [];
                    }
                    ;
                    self.keymaps[item.id].push(_id)
                });
            });
        });
    },
    getParent: function (parent) {
        var parents = [];
        var self = this;
        (this.keymaps[parent] || []).forEach(function (item, index) {
            parents.push(self.maps[item]);
        });
        return parents.length ? parents : [{key: 'QUANT', id: parent, name: '策略'}];
    },
    getChildsByName: function (name) {
        if (1 !== arguments.length) {
            name = [].slice.apply(arguments).join(this.append);
        }
        return this.getItemByName(name + "[" + this.append + "]{1}.?[^" + this.append + "]+");
    },
    getItemByName: function (name) {
        if (1 !== arguments.length) {
            name = [].slice.apply(arguments).join(this.append);
        }
        return this._getItemByName(name);
    },
    _getItemByName: function (name) {
        var reg = RegExp(name);
        var result = [];
        var self = this;
        //console.log(reg);
        Object.keys(this.maps).forEach(function (key, index) {
            var item = self.maps[key];
            var match = reg.exec(item.name);
            if (match && match[0] == item.name) {
                result.push(self.maps[key]);
            }
        });
        return result;
    }
});

module.exports = Tree;
