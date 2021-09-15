const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: false
        }
    },
    methods: {
        updateCart(index){
            this.cart.push(index)
        }

    },

})
