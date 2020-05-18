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

const clearInput = ()=> {
    shoppingList.$data.newItem = "";

    return shoppingList.$data.newItem;
};

const dummyItemLabels = ["Sör", "Bor", "Pálinka"];

const makeInitialItems = (labels)=> {
    return labels.map(label=> makeShoppingListItem(label));
};

const focusInput = ()=> {
    shoppingList.$refs.itemInput.focus();
};

const addItem = (label)=> {
    const item = makeShoppingListItem(label);

    shoppingList.$data.items = [...shoppingList.$data.items, ...[item]];
    clearInput();
    focusInput();

    return shoppingList.$data.items;
};

const shoppingList = new Vue({
    el: "#shopping-list", // works with DOMElement too so document.getElementById("foo") or document.querySelector("#foo") is the same
    data: {
        header: "Bevásárló lista",
        newItem: "",
        add: addItem,
        items: makeInitialItems(dummyItemLabels)
    }
});