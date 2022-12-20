import React from 'react';
import ProductInfo from '../components/product/ProductInfo';
import { useParams } from 'react-router-dom';
import Loader from '../controller/loader';

function ProductPage (): JSX.Element {
  const params = useParams();
  const loader = new Loader();
  console.log(params);
  const item = loader.loadProduct(Number(params.id));
  return (
    <main className='product'>
      <div className="product-path">
        store---smartphones---apple
      </div>
      <ProductInfo
      id={Number(item.id)}
      title={item.title ? item.title : 'not found'}
      description={item.description ? item.description : 'desc'}
      price={item.price ? item.price : 0}
      discountPercentage={item.discountPercentage}
      category={item.category}
      images={item.images![0]}
      />
    </main>
  );
}
export default ProductPage;
