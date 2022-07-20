import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { Publish } from "@material-ui/icons";
export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Add Product</button>
        </Link>
      </div>
      <div className="productTop">
      
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="https://th.bing.com/th/id/OIP.mnpRHnZU0sjG--YJBCNKnAHaHa?pid=ImgDet&rs=1" alt="" className="productInfoImg"/>
            <span className="productName">UFC gloves</span>
          </div>
          <div className="productInfoBottom">
          <div className="productInfoItem">

            <span className="productInfoKey">id</span>
            <span className="productInfoValue">Value</span>
          </div>
          <div className="productInfoItem">

            <span className="productInfoKey">Sale</span>
            <span className="productInfoValue">$2500</span>
          </div>
          <div className="productInfoItem">

            <span className="productInfoKey">active:</span>
            <span className="productInfoValue">yes</span>
          </div>
          <div className="productInfoItem">

            <span className="productInfoKey">in stock</span>
            <span className="productInfoValue">no</span>
          </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder="UFC gloves"/>
                    <label>In stock</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select name="Active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://th.bing.com/th/id/OIP.mnpRHnZU0sjG--YJBCNKnAHaHa?pid=ImgDet&rs=1" alt="" className="productUploadImg"/>
                        <label for="file">
                            <Publish/>
                        </label>
                        <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                    <button className="productButton">Update</button>
                </div>

          </form>
      </div>
    </div>
  );
}
