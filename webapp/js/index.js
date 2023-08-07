function database () {
    sessionStorage.setItem("9789871071685", '{"name": "Vagabond 1","price": "1200"}');
    sessionStorage.setItem('9789871071814', '{"name": "Vagabond 2","price": "1200"}' );
    sessionStorage.setItem('97884179020357', '{"name": "Death Note 5","price": "1400"}');
    console.log("Database was loaded")
}

const barcode = document.getElementById("barcode");
barcode.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        let bc = document.getElementById("barcode").value;
        registerProduct(bc);
        document.getElementById("barcode").value = '';
    }
})

function registerProduct(bc) {
    const data = JSON.parse(sessionStorage.getItem(bc));
    const code = document.createElement("td");
    code.textContent = bc;
    const name = document.createElement("td");
    name.textContent = data.name;
    const price = document.createElement("td");
    price.textContent = data.price;
    const action = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.onclick = function(){deleteItem(bc)};
    deleteButton.textContent = 'Borrar'
    action.appendChild(deleteButton)
    
    const row = document.createElement("tr");
    row.id = bc
    row.appendChild(code);
    row.appendChild(name);
    row.appendChild(price);
    row.appendChild(action);


    const table = document.getElementById("products");
    table.appendChild(row);
    const totalAmount = parseFloat(document.getElementById('total-amount').textContent) + parseFloat(data.price);
    document.getElementById('total-amount').textContent = totalAmount.toString();
}

function appendProduct() {
    const selectedItem = document.getElementById("manga-list");
    if (selectedItem.value !== '') {
        registerProduct(selectedItem.value)
        document.getElementById('manga-list').value = "";
    }
}

function pay() {
    const table = document.getElementById('products');
    let trs = '';
    while (true) {
        trs = table.getElementsByTagName('tr');
        for (let i = 0; i < trs.length; i++) {
            if (trs[i].id !== 'col-name') {
                trs[i].remove();
            }
        }
        if (trs.length === 1) {
            break;
        }
    }
    
    const total = document.getElementById("total-amount") 
    alert(`Pago $ ${total.textContent}`)
    total.textContent = 0;
    
}

function deleteItem(id) {
    const row = document.getElementById(id);
    const tds = row.getElementsByTagName('td');

    const totalAmount = parseFloat(document.getElementById('total-amount').textContent) - parseFloat(tds[2].textContent);
    document.getElementById('total-amount').textContent = totalAmount.toString();

    row.remove();
}