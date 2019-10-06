export default (Vue)=>{
    Vue.directive("focus",{
        inserted:function(el){
            el.focus();
        }
    })
    Vue.directive("allow",{
        bind:function (el, binding, vnode, oldVnode) {

        }
    })
    Vue.directive("isShow",{
        bind:function (el, binding, vnode, oldVnode) {
            console.log(el)
        }
    })
}