/////////////////////add to db////////////

const addToDb = (id) => {
    // let shoppingCart = {};
    let shoppingCart;

    ////////////////get the shopping cart//////////////////
    const storedCart = localStorage.getItem('shopping-cart');
    //'shopping-cart' er property gula storedCart e add hocche
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart = {};
    }

    // localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

    // const quantity = localStorage.getItem(id);

    /////////////add quantity///////////////
    const quantity = shoppingCart[id];
    if(quantity){
        // const newQuantity = parseInt(quantity) + 1;
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    }
    else{
        // localStorage.setItem(id, 1);
        shoppingCart[id] = 1;
    }
    
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
////////////////remove from db
const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);//loop in dite hole age parse korte hobe
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));//click kora id delete howar por oita chara bakigula k abar storage e set korlam
        }
    }
}

////////////////////////delete from db
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {addToDb, removeFromDb, deleteShoppingCart};