class product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

function showMenu() {
    let chosenOption
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt(  "O que deseja fazer?\n" +
                                "1- Cadastrar produto\n" +
                                "2- Imprimir produtos\n" +
                                "3- Sair do programa")
    }
    return chosenOption
}

function createProduct() {
    let productName = prompt("Informe o nome do produto: ")
    let productPrice = prompt("Informe o valor do produto: ")
    let products = new product(productName, productPrice)
    return products
}

function printProductList(product) {
    let productList = ""
    product.forEach((product, index) => {
        productList +=    (index + 1) + "- " + product.name +
                            " (" + product.price + " R$)\n"
    })
    alert(productList)
}

let dataBase = []
let chosenOption

while(chosenOption != "3") {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            let prodToAdd = createProduct()
            dataBase.push(prodToAdd)
            break
        case "2":
            printProductList(dataBase)
            break
    }
}