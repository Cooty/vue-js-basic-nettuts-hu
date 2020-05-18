const shoppingList = new Vue({
    el: "#shopping-list", // works with DOMElement too so document.getElementById("foo") or document.querySelector("#foo") is the same
    data: {
        header: "Bevásárló lista",
        newItem: '',
        items: [
            {
                label: "Sör",
                purchased: false,
                highPriority: false
            },
            {
                label: "Bor",
                purchased: true,
                highPriority: false
            },
            {
                label: "Pálinka",
                purchased: true,
                highPriority: true
            }
        ]
    }
});