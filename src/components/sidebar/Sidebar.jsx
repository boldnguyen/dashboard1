import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Timeline,
  TrendingUp,
  WorkOutline,
  Report,
  DynamicFeed,
  ChatBubbleOutline,
  AttachMoney,
  Storefront,
  BarChart,
} from "@material-ui/icons";
import RadarIcon from '@mui/icons-material/Radar';
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">dashboard</h3>
          <ul className="sidebarList">
            <Link to="/"className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <Link to="/sales" className="link">
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li></Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem ">
                <PermIdentity className="sidebarIcon" />
                User
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem ">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem ">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <Link to="/radar" className="link">
            <li className="sidebarListItem">
              <RadarIcon className="sidebarIcon" />
              Radar chart
            </li></Link>
            <Link to="/feedback" className="link">
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li></Link>
            <Link to="/messages" className="link">

            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
