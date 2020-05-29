class ShoppingListItem {
    label = "";
    purchased = false;
    highPriority = false;

    constructor(label) {
        this.label = label;
    }
}

const makeShoppingListItem = label=> {
    return new ShoppingListItem(label);
};

const dummyItemLabels = ["Sör", "Bor", "Pálinka"];

const makeInitialItems = (labels)=> {
    return labels.map(label=> makeShoppingListItem(label));
};

const shoppingList = new Vue({
    el: "#shopping-list", // works with DOMElement too so document.getElementById("foo") or document.querySelector("#foo") is the same
    data: {
        header: "Bevásárló lista",
        newItem: "",
        items: makeInitialItems(dummyItemLabels),
        state: "default"
    },
    methods: {
        clearInput() {
            this.newItem = "";
        },
        focusInput() {
            this.$refs.itemInput.focus();
        },
        addItem() {
            const item = makeShoppingListItem(this.newItem);

            shoppingList.$data.items = [...shoppingList.$data.items, ...[item]];
            this.clearInput();
            this.focusInput();

            return shoppingList.$data.items;
        },
        changeState(newState) {
            this.state = newState;
            this.clearInput();
        }
    }
});