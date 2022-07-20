import "./user.css";
import { Link } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import {
  LocationSearching,
  MailOutline,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit</h1>
        <Link to="/newUser">
        <button className="userAddButton">Add </button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://th.bing.com/th/id/OIP.asDR0qNapM32l33iYKqQWgHaEH?pid=ImgDet&rs=1"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUserName">
                Gennadiy Gennadyevich Golovkin
              </span>
              <span className="userShowUserTitle">World Champion</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Net-worth</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Triple G</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayIcon className="userShowIcon" />
              <span className="userShowInfoTitle">08/04/1982</span>
            </div>
            <span className="userShowTitle">Private Contact</span>

            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+50 420 000</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">tripleG@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Kazakhstan</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Tripple G"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Gennadiy Gennadyevich Golovkin"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="tripG@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+50 420 000"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Nation</label>
                <input
                  type="text"
                  placeholder="Kazakhstan"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImg" src="https://th.bing.com/th/id/OIP.asDR0qNapM32l33iYKqQWgHaEH?pid=ImgDet&rs=1" alt="" />
                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                <input type="file" id="file" style={{display:"none"}}/>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
