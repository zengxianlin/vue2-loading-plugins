/*
* @Author: zengxianlin
* @Date:   2017-02-21 09:54:39
* @Last Modified by:   877529974@qq.com
* @Last Modified time: 2017-02-21 10:07:00
*/
const loaddingComponent = require('./Loading.vue')
const loading = {
    install: function(Vue){
        Vue.component('loading', loaddingComponent)
    }
}
module.exports = loading
