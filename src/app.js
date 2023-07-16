const express = require('express');
const ProductManager = require('./product-manager');
let productManager = new ProductManager();

let persistirProduct = async() =>{

    //  await productManager.addProduct("ccc", "ygasdhjs", 3, "aghadfgd", "thrwef", 8);
    //  await productManager.addProduct("ccc", "ygasdhjs", 3, "aghadfgd", "thrwef", 8);
    //  await productManager.addProduct("ccc", "ygasdhjs", 3, "aghadfgd", "thrwef", 8);
    //  await productManager.addProduct("ccc", "ygasdhjs", 3, "aghadfgd", "thrwef", 8);

    // let productos = await productManager.getProducts();
    // console.log(productos)
    // let productos2 = await productManager.getProductById(3);
    // console.log(productos2)
    // let productos3 = await productManager.updateProduct(3,100343200,"stock");
    // console.log(productos3)
    // let productoEliminado = await productManager.deleteProduct(3)
    //console.log(productoEliminado);
};
persistirProduct();



const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended:true}))


app.get('/products', async (req, res) => {
    let products = await productManager.getProducts();
  
    if (req.query.limit) {
      const limit = parseInt(req.query.limit);
      const limitedProducts = products.slice(0, limit);
      res.send(limitedProducts);
    } else {
      res.send(products);
    }
  });

app.get('/products/:pid', async(req, res)=>{
    // console.log(req.params.pid);
    let id = req.params.pid;
    let producto = await productManager.getProductById(parseInt(id))
    if(producto){
        res.json(producto);
        console.log(producto);
    }else{
        res.send("No encontrado")
        console.log(producto);
    }
})

app.listen(PORT, ()=>{
    console.log(`Funcionando en puerto ${PORT}`);
})