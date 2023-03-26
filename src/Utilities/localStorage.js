///////////
//option -1
///////////
const addLocalStorage = (id) => {
    const quantity = localStorage.getItem(id);//ai idr koyta storage e ache ache segula quantity te rakhlam
    //akhn jodi quantity te store thake tahole segula k abar storage e add korbo and 1 kore barabo
    if(quantity){
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);//localstorage e id k pathailam key hisebe and abar add kora value ta 1 kore barie seta k value hisebe dilam
    }
    //jodi storage kicu na thake se khetre new add korbo
    else{
        localStorage.setItem(id, 1);
    }
};

//////////
//option-2
//////////
const addToLocalStorage = (id) => {
    
    let shoppingCart = {};
           ////////////////get the shopping cart//////////////////
           const storedCart = localStorage.getItem('shopping-cart');
           //'shopping-cart' er property gula storedCart e add hocche
           if(storedCart){
               shoppingCart = JSON.parse(storedCart);
           }
           else{
               shoppingCart = {};
           }


           //add quantity
    // const quantity = localStorage.getItem(id);
    const quantity = shoppingCart[id];// jehetu shopping cart akta object and ata k storage e add kora hoyeche. tai shopping cart e id k property hisebe pathale e sei idr value quantity te set hobe
    //local storage e jodi kuno id thake tahole setar value pabo getItem die but akhn jehetu localstorage e shoppingCart k add korechi tai shopping cart e jodi id thake setar value quantity te set hobe
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;//shoppingcart er idr value hisebe newquantity k set kore dilam
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
export {addLocalStorage, addToLocalStorage};