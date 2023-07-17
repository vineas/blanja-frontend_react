import '../index.css';
import React from 'react'
const shirt = require('../img/category/t-shirt.png')
const pants = require('../img/category/pants.png')
const jacket = require('../img/category/jacket.png')
const shorts = require('../img/category/shorts.png')

const Category = () => {
  return (
      <>
          <section className="container" id="category" style={{marginTop: 70}}>
              <h2 className="ml-3">Category</h2>
              <div className="container mt-5">
                  <div className="row">
                      <div className="col-md-3 col-sm-3 mb-5">
                          <div className="border rounded product">
                              <img
                                  className="w-100"
                                  src={shirt}
                                  alt="cloth"
                              />
                          </div>
                      </div>
                      <div className="col-md-3 col-md-3 mb-5">
                          <div className="border rounded product">
                              <img
                                  className="w-100"
                                  src={pants}
                                  alt="cloth"
                              />
                          </div>
                      </div>
                      <div className="col-md-3 col-md-3 mb-5">
                          <div className="border rounded product">
                              <img
                                  className="w-100"
                                  src={jacket}
                                  alt="cloth"
                              />
                          </div>
                      </div>
                      <div className="col-md-3 col-md-3 mb-5">
                          <div className="border rounded product">
                              <img
                                  className="w-100"
                                  src={shorts}
                                  alt="cloth"
                              />
                          </div>
                      </div>
                  </div>
              </div>
          </section>


      </>
  )
}

export default Category