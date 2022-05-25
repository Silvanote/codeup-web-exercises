$.get("/data/inventory.json").done(function(products){
    $("#products").html("");
    products.forEach(function(product) {
        let h3 = "<h3>" + product.title + "</h3>>";
        let p = "<p>" + product.price + "</p>"
        $("#products").append(h3 + p);
    })
})
