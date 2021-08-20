const db = firebase.firestore();

var data = [];

db.collection("Products").get().then((result) => {
    result.forEach(doc => {
        data.push(doc.data())
    });
    console.log(data)
    document.getElementById("product").innerHTML = data.map(item => {
        return (
            render(item)
        )
    })

}).catch((err) => {
    console.log(err)
});

function render(item) {
    return (
        <div class="col-lg-3 col-sm-6 mb--45">
            <div class="ft-product HTfadeInUp">
                <div class="product-inner" style="display:flex; justify-content: space-between; flex-direction:column; height:400px;" >
                    <div class="product-image" style="display:flex; justify-content:center; align-items:center; height:100%" >
                        <figure class="product-image--holder">
                            <img src="${item.image}"
                                alt="Product" />
                        </figure>
                        <a href="product-details.html" class="product-overlay"></a>
                    </div>
                    <div class="product-info">
                        <div class="product-category">
                            <a href="product-details.html">${item.category}</a>
                        </div>
                        <h3 class="product-title"><a href="product-details.html">${item.name}</a></h3>
                        <div class="product-info-bottom">
                            <div class="product-price-wrapper">
                                <span class="money">$${item.sp}</span>
                            </div>
                            <a href="cart.html" class="add-to-cart pr--15">
                                <i class="fas fa-plus"></i>
                                <span>Buy Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}