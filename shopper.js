// Giving Logo and Header/Title dynamic background
const logo_header = document.querySelector('.logo-header');
const color = ['white', '#FFEC98', '#EE7464', '#5A504A'];
let counter = 0;

const logo_background = () => {
    if (counter > color.length) {
        counter = 0;
    }
    logo_header.style.background = color[counter];
    logo_header.style.transition = '1s';
    counter++;
};

setInterval(logo_background, 3000);



// Implementing the Input Bar
const input_bar = document.forms['input-bar'];
const list = document.querySelector('.list');

input_bar.addEventListener('submit', (e) => {
    e.preventDefault();    

    // Creating Elements to append in the list
    const item_wrapper = document.createElement('li');
    item_wrapper.classList.add('item-wrapper');

    const item_check = document.createElement('span');
    item_check.classList.add('item-check');

    const shopped = document.createElement('span');
    shopped.classList.add('fa-solid');
    shopped.classList.add('fa-cart-arrow-down');
    shopped.style.display = 'none';

    const cart = document.createElement('span');
    cart.classList.add('fa-solid');
    cart.classList.add('fa-cart-shopping');

    const item = document.createElement('span');
    item.classList.add('item');

    const delete_btn = document.createElement('span');
    delete_btn.classList.add('delete');
    delete_btn.classList.add('fa-solid');
    delete_btn.classList.add('fa-trash-can');

    const input_item = input_bar.querySelector('#input-item');

    if (input_item.value !== '') {   
        // appending
        item.textContent = input_item.value;
        item_check.appendChild(shopped);
        item_check.appendChild(cart);
        item_check.appendChild(item);
        item_wrapper.appendChild(item_check);
        item_wrapper.appendChild(delete_btn);
        list.appendChild(item_wrapper);
        input_item.value = '';
    }

    // checking items off the list
    item.addEventListener('click', () => {
        if (item.className === 'item') {
            item.classList.toggle('checked');
            cart.style.display = 'none';
            shopped.style.display = 'inline-block';
        } else {
            item.classList.toggle('checked');
            cart.style.display = 'inline-block';
            shopped.style.display = 'none';
        }
    });

    // deleting items off the list
    delete_btn.addEventListener('click', () => {
        list.removeChild(delete_btn.parentElement);
    });
});

// Implementing the Arrow up button === add_to
const add_to = document.querySelector('.fa-arrow-up');

add_to.addEventListener('click', () => {
    // Creating Elements to append in the list
    const item_wrapper = document.createElement('li');
    item_wrapper.classList.add('item-wrapper');

    const item_check = document.createElement('span');
    item_check.classList.add('item-check');

    const shopped = document.createElement('span');
    shopped.classList.add('fa-solid');
    shopped.classList.add('fa-cart-arrow-down');
    shopped.style.display = 'none';

    const cart = document.createElement('span');
    cart.classList.add('fa-solid');
    cart.classList.add('fa-cart-shopping');

    const item = document.createElement('span');
    item.classList.add('item');

    const delete_btn = document.createElement('span');
    delete_btn.classList.add('delete');
    delete_btn.classList.add('fa-solid');
    delete_btn.classList.add('fa-trash-can');

    const input_item = input_bar.querySelector('#input-item');

    if (input_item.value !== '') {   
        // appending
        item.textContent = input_item.value;
        item_check.appendChild(shopped);
        item_check.appendChild(cart);
        item_check.appendChild(item);
        item_wrapper.appendChild(item_check);
        item_wrapper.appendChild(delete_btn);
        list.appendChild(item_wrapper);
        input_item.value = '';
    }

    // checking items off the list
    item.addEventListener('click', () => {
        if (item.className === 'item') {
            item.classList.toggle('checked');
            cart.style.display = 'none';
            shopped.style.display = 'inline-block';
        } else {
            item.classList.toggle('checked');
            cart.style.display = 'inline-block';
            shopped.style.display = 'none';
        }
    });

    // deleting items off the list
    delete_btn.addEventListener('click', () => {
        list.removeChild(delete_btn.parentElement);
    });
});

// Implementing the Search Bar
const search_bar = document.forms['search-bar'];

search_bar.addEventListener('keyup', (e) => {
    search_bar.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    const search_item = document.querySelector('#search-item');
    const items = document.querySelectorAll('.item');
    // scan thru the list
    items.forEach(item => {
        let item_text = item.textContent.toLowerCase();
        if (item_text.indexOf(search_item.value.toLowerCase()) !== -1) {
            item.parentElement.parentElement.style.display = 'flex';
        } else {
            item.parentElement.parentElement.style.display = 'none';
        }
    });
});

// Implementing the Tips Section
const tip = document.querySelector('.tip');
const how_to_use = ["For a long list, kindly use the 'Search List...' for quick check!", 
                    "To add to list, you can use the 'Enter' key or click on the 'Arrow Up'.", 
                    "To check an item off the list, click on the item itself, or you can click 'delete icon' to get it ridden off completely", 
                    "Happy Shopping! :)"];
let count = 0;

const user_guide = () => {
    if (count > how_to_use.length) {
        count = 0;
    }
    tip.textContent = how_to_use[count];
    tip.style.transition = '1s';
    count++;
};

setInterval(user_guide, 6000);