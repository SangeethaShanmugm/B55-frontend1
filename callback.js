const carts = ["Shoes", "tshirts", "pants", "Pyjamas"]

api.createOrder(carts, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet()
        })
    })
})

chefA(senior) & chefB(junior)

chefA(instructions_for_cake, chefB(){
    prepare_cake
})


// inversion of control
// callback hell