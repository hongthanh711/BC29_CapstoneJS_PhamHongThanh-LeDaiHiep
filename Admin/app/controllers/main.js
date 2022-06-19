var service = new Servcies();

function getEle(id) {
  return document.getElementById(id);
}

function getListProducts() {
  service
    .getListProductApi()
    .then(function (result) {
      renderListProducts(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getListProducts();

function renderListProducts(data) {
  var contentHTML = "";

  data.forEach(function (product, index) {
    contentHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td>
                <img class="img-fluid" src="${product.img}"  width="50"/>
            </td>
            <td>${product.desc}</td>
            <td>
                <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editProduct('${
                  product.id
                }')">Sửa</button>
                <button class="btn btn-danger" onclick="deleteProduct('${
                  product.id
                }')">Xoá</button>
            </td>
        </tr>
    `;
  });

  getEle("tblDanhSachSP").innerHTML = contentHTML;
}

/**
 * Delete SP
 */
function deleteProduct(id) {
  service
    .deleteProductApi(id)
    .then(function () {
      //render table
      getListProducts();
    })
    .catch(function (error) {
      console.log(error);
    });
}

getEle("btnThemSP").onclick = function () {
  //Sửa lại title modal
  document.getElementsByClassName("modal-title")[0].innerHTML = "Thêm Sản Phẩm";

  //Thêm nút "Add" vào footer modal
  var footer = `<button class="btn btn-success" onclick="addProduct()">Thêm</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
};

/**
 * Add Product
 */
function addProduct() {
  var id = getEle("ID").value;
  var name = getEle("TenSP").value;
  var price = getEle("GiaSP").value;
  var screen = getEle("screen").value;
  var backCamera = getEle("backCamera").value;
  var frontCamera = getEle("fontCamera").value;
  var img = getEle("HinhSP").value;
  var desc = getEle("MoTa").value;
  var type = getEle("type").value;

  //doi tuong product
  var product = new Product(
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  );

  console.log(product);
  service
    .addProductApi(product)
    .then(function () {
      //render table
      getListProducts();
      //close modal
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    });
}

/**
 * Edit Product
 */
function editProduct(id) {
  //Sửa lại title modal
  document.getElementsByClassName("modal-title")[0].innerHTML = "Sửa Sản Phẩm";

  //Thêm nút "Update" vào footer modal
  var footer = `<button class="btn btn-success" onclick="updateProduct(${id})">Cập nhật</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;

  //getProductById
  service
    .getProductById(id)
    .then(function (result) {
      //show thông tin ra các thẻ input
      getEle("ID").value = result.data.id;
      getEle("screen").value = result.data.screen;
      getEle("backCamera").value = result.data.backCamera;
      getEle("fontCamera").value = result.data.frontCamera;
      getEle("type").value = result.data.type;
      getEle("TenSP").value = result.data.name;
      getEle("GiaSP").value = result.data.price;
      getEle("HinhSP").value = result.data.img;
      getEle("MoTa").value = result.data.desc;
    })
    .catch(function (error) {
      console.log(error);
    });
}

/**
 * Update product
 */
function updateProduct(id) {
  var id = getEle("ID").value;
  var name = getEle("TenSP").value;
  var price = getEle("GiaSP").value;
  var screen = getEle("screen").value;
  var backCamera = getEle("backCamera").value;
  var frontCamera = getEle("fontCamera").value;
  var img = getEle("HinhSP").value;
  var desc = getEle("MoTa").value;
  var type = getEle("type").value;

  var product = new Product(
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  );

  service
    .updateProductApi(product)
    .then(function () {
      //render table
      getListProducts();
      //close modal
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    });
}
