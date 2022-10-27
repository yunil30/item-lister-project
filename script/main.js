var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filterList = document.getElementById('filter');

// Add item event.
form.addEventListener('submit', addItem);
// Delete item event.
itemList.addEventListener('click', deleteItem);
// Filter list event.
filterList.addEventListener('keyup', filterItems);

// Function for adding an item.
function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    // These codes are used to create a new html element and also sets a classname.
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.id = 'list-group-item';
    // These codes are for adding an <li></li> element together with text value.
    if (newItem == '') {
        li.appendChild(document.createTextNode('Submit new item...'));
    } else {
        li.appendChild(document.createTextNode(newItem));
    }
    itemList.appendChild(li);
    // These codes are for adding a <delete></delete> element inside <li></li> element.
    var delButton = document.createElement('button');
    delButton.className = 'delete-button';
    delButton.id = 'delete-button';
    // These codes are used to placed the 'x' text inside the <delete></delete> element and also place the button inside with the <li></li> element.
    delButton.appendChild(document.createTextNode('X'));
    li.appendChild(delButton);
}

// Function for deleting an item.
function deleteItem(e){
    e.preventDefault();
    // These codes are used to delete an entire li element by targeting the button className.
    if (e.target.classList.contains('delete-button')) {
        // These codes are used to confirmation before deleting an item.
        if (confirm('Are you sure you want to delete this item?')) {
            // You need to create a new li variable and target it the parentElement so that it can remove the exact item.
            var li = e.target.parentElement;
            // I used the itemList because it is the parent element of li which is the ul.
            itemList.removeChild(li);
        }     
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
