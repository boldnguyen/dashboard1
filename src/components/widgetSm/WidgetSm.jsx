import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Customer</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://cdn4.vectorstock.com/i/1000x1000/61/78/customer-icon-vector-12896178.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUSer">
            <span className="widgetSmUsername">Bold</span>
            <span className="widgetSmUSerTitle">ReactJS Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn4.vectorstock.com/i/1000x1000/61/78/customer-icon-vector-12896178.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUSer">
            <span className="widgetSmUsername">Drake</span>
            <span className="widgetSmUSerTitle">GoLang Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn4.vectorstock.com/i/1000x1000/61/78/customer-icon-vector-12896178.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUSer">
            <span className="widgetSmUsername">Kim</span>
            <span className="widgetSmUSerTitle">NextJS Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
