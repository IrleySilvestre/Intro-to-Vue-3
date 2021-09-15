const app = Vue.createApp({
    data() {
        return {
            inventory:10,
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            //inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
            this.inventory -=1
        },

        removeToCart() {
            this.cart -= 1
            this.inventory +=1
        },

        updateImage(variantImage) {
            this.image = variantImage
        },

    },

    computed: {
        inStock: function(){
            if (this.inventory == 0) {
                return true
            } else {
                return false                
            }
        }
    }
})
