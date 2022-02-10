import Product from "./Product";
function App() {
  return (
    <div className="App">
        <h1>Amazon application</h1>
        <Product name="Amazon product 1" 
        description="product 1" 
        price={99.99} />

        <Product name="Amazon product 2" 
        description="product 2" 
        price={89.99} />

        <Product name="Amazon product 3" 
        description="product 3" 
        price={79.99} />

        <Product name="Amazon product 4" 
        description="product 4" 
        price={69.99} />
        
    </div>
  );
}

export default App;
