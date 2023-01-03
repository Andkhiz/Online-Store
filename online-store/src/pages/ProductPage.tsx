import React, { useState, useEffect } from 'react';
import ProductInfo from '../components/product/ProductInfo';
import ProductInfoNotFound from '../components/product/productInfoNotFound';
import { useParams } from 'react-router-dom';
import { ICartLayout, IProduct } from '../interfase';
import { loadProduct } from '../controller/loadProduct';

function ProductPage ({ setCartPageData, cartPageData, totalCartData, setTotalCartData }: ICartLayout): JSX.Element {
  const params = useParams();
  const [product, setProduct] = useState<IProduct>();

  const loadProductData = function (): void {
    fetch('../db.json', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async (responce: Response) => {
        if (!responce.ok) throw new Error(responce.statusText);
        return await responce.json();
      })
      .then((result) => loadProduct(result, Number(params.id)))
      .then((result) => setProduct(result))
      .catch(error => { throw Error(error); });
  };
  useEffect(() => { loadProductData(); }, [Number(params.id)]);

  return (
    <main className='product'>
      <div className="product-path">
        store---smartphones---apple
      </div>
      {
        product !== undefined
          ? <ProductInfo
          id={Number(product.id)}
          title={product.title}
          description={product.description}
          price={product.price}
          discountPercentage={product.discountPercentage}
          category={product.category}
          images={product.images}
          cartCount={product.cartCount}
          stock={product.stock}
          brand={product.brand}
          thumbnail={product.thumbnail}
          rating={product.rating}
        />
          : <ProductInfoNotFound/>
      }
    </main>
  );
}
export default ProductPage;
