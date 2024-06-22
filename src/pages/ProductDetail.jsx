const ProductDetail = () => {
  return (
    <>
      <div className="ui grid container">
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img
                  className="ui fluid image"
                  src="https://istyle.hr/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/i/p/iphone_15_pink_pdp_image_position-1__en-us_1_1.jpg"
                  alt="product"
                />
              </div>
              <div className="column rp">
                <h1>Product title</h1>
                <h2>
                  <h3 className="ui teal tag label">$100</h3>
                </h2>
                <h3 className="ui brown block header">technology</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  animi sequi iste repellat inventore cupiditate voluptatum hic
                  atque consequatur quod iure, rerum incidunt esse. Aspernatur
                  quis architecto iste voluptatum ipsam?
                </p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
