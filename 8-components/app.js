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

Vue.component('item', {
    props: {
        product: ShoppingListItem
    },
    template: `
        <li v-on:click="togglePurchased(product)"
            :class="{strikeout: product.purchased}">
            {{ product.label }}
        </li>`,
    methods: {
        togglePurchased: (product) => {
            product.purchased = !product.purchased;
        }
    }    
});

const shoppingList = new Vue({
    el: "#shopping-list", // works with DOMElement too so document.getElementById("foo") or document.querySelector("#foo") is the same
    data: {
        header: "Bevásárló lista",
        newItem: "",
        items: makeInitialItems(dummyItemLabels),
        state: "default"
    },
    computed: {
        reversedItems() {
            return [...this.items].reverse();
        },
        sortedItems() {
            return [...this.items].sort((a, b)=> {
                return a.label.localeCompare(b.label);
            });
        }
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