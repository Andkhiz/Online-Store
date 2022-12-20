import React from 'react';
import ProductInfo from '../components/product/ProductInfo';
import ProductInfoNotFound from '../components/product/productInfoNotFound';
import { useParams } from 'react-router-dom';
// import Loader from '../controller/loader';
import { ILoaderClassObj } from '../interfase';

function ProductPage (loader: ILoaderClassObj): JSX.Element {
  const params = useParams();
  // const loader = new Loader();
  console.log(params);
  const item = loader.loader.loadProduct(Number(params.id));
  return (
    <main className='product'>
      <div className="product-path">
        store---smartphones---apple
      </div>
      {
        item !== undefined
          ? <ProductInfo
          id={Number(item.id)}
          title={item.title}
          description={item.description}
          price={item.price}
          discountPercentage={item.discountPercentage}
          category={item.category}
          images={item.images}
          cartCount={item.cartCount}
          stock={item.stock}
          brand={item.brand}
          thumbnail={item.thumbnail}
          rating={item.rating}
        />
          : <ProductInfoNotFound/>
      }
    </main>
  );
}
export default ProductPage;
