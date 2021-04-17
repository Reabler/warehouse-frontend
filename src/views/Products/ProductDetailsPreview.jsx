import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../lib/constants'

const ProductDetailsPreview = ({productId}) => {
  const PRODUCT_ID = '6079ff9f4d27246d81d222d7'
  const [product, setProduct] = useState()
  const [isLoading, setIsLoading] = useState(true)

  function getProductData() {
    axios.get(`${API_BASE_URL}/products/${productId}`)
    .then((response) => {
      setIsLoading(false)
      setProduct(response.data)
    })
  }

  useEffect(() => {
    getProductData()
  }, [productId])

  return (
    <React.Fragment>
      <main>
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          <div className="max-w-7xl mx-auto py-6">
            <h2 className="text-xl pb-2">{product?.title}</h2>
            <hr />

            <div className="productVendorList pt-12">
              <h2 className="text-xl pb-2">Sold By</h2>

              <div className="border rounded">
                {product?.articles?.map((article, i) => {
                  return (
                    <div className="table w-full border-b py-2" key={article._id}>
                      <div className="table-row-group">
                        <div className="table-row">
                          <div className="table-cell">
                            <p>{article.vendor.name}</p>                        
                          </div>
                          <div className="table-cell">
                            <p>{article.inStock} units</p>                        
                          </div>
                          <div className="table-cell">
                            <p>{article.price} {article?.vendor?.currency}</p>                        
                          </div>
                          <div className="table-cell">
                            <p>{article?.properties?.grade}</p>                        
                          </div>
                        </div>
                      </div>
                    </div>                  
                  )
                })}
              </div>
            </div>


          </div>
        }
      </main>
    </React.Fragment>
  );
};

export default ProductDetailsPreview