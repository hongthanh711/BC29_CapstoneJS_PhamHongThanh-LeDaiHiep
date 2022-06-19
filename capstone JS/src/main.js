var service = new Services();


function getEle(id){{
    return document.getElementById(id);
}}

function getListProducts(){{
    var promise = service.getListProductsApi();
    promise
    .then(function(result){{
        renderListProduct(result.data);
        
    }})
    .catch(function(error){{
        console.log(error);
    }})

}}



function renderListProduct(data){
    var contentHTML = "";
    data.forEach(function(product){
        contentHTML += `
        <div class="col-12 col-md-6 col-lg-3">
                    <div class="card cardPhone">
                        <img src="${product.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            
                            <div>
                                <div class="pb-3">
                                    <div class="text-align-center pb-3">
                                <div class="name"> ${product.name}</div>
                                <div class="price"> $${product.price}</div>
                                <div class="desc"> ${product.desc}</div>
                            </div>

                                <div class="cardPhone__rating mb-3">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                </div>
                                <div class="text-align-center">
                                    <button class="btnPhone-shadow"><p><i class="fa fa-shopping-cart"></i> Buy Now</p></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
        `
    });

    getEle("listProduct").innerHTML = contentHTML;
}

getListProducts();

function chooseType () {
    let chooseType = getEle('chooseType').value;
    if(chooseType === "Samsung"){
 
        getEle("listProduct").innerHTML = "Samsung";
             
        }
       
    if (chooseType === "Apple") {
        getEle("listProduct").innerHTML = "Apple";
    }
    
    if(chooseType === "All"){
        getListProducts();
    }
}

