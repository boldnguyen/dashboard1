import "./widgetLg.css";
export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton" + type}>{type}</button>;
  };
  return (
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest transactions</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://th.bing.com/th/id/OIP.7cthIilo7h6jblpXiUmfmAHaQD?pid=ImgDet&rs=1"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Jake</span>
            </td>
            <td className="widgetLgDate">15 May 2022</td>
            <td className="widgetLgAmount">$2044</td>
            <td className="widgetLgStatus">
              Approved
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://th.bing.com/th/id/OIP.V9zSWWuDl5xqCsGV4JEPLAHaE7?pid=ImgDet&rs=1"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Jensen Ackles</span>
            </td>
            <td className="widgetLgDate">12 Feb 2022</td>
            <td className="widgetLgAmount">$104</td>
            <td className="widgetLgStatus">
              Declined
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://th.bing.com/th/id/OIP.DLSWXpGgSHr_xEYC7qz6AwHaEL?pid=ImgDet&rs=1"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Homelander</span>
            </td>
            <td className="widgetLgDate">14 July 2022</td>
            <td className="widgetLgAmount">$500</td>
            <td className="widgetLgStatus">
            Pending
            </td>
          </tr>
        </table>
      </div>
  );
}
