import React from "react";

const Profile = () => {
  return (
    <div className="col-lg-push-3 col-lg-6 col-md-push-2 col-md-8 col-sm-push-2 col-sm-8 col-xs-12 col-xs-push-0 vendor-box">
      <div className="con_wrap multi_view one_view">
        <div className="main_content">
          <div className="leftcolumn">
            <div className="user_img">
              <img src="./assets/img/dummy.jpg" className="img-responsive" />
            </div>
            <div className="highlight_points">
              <ul>
                <li>Family Law</li>
                <li>Labour Law</li>
                <li>Constitutional Law </li>
                <li>Business Law</li>
              </ul>
              <div className="clearfix" />
            </div>
            <div className="vendor_btlinks">
              <div className="pull-left">
                <a href="javascript:void(0);" className="fgh">
                  {" "}
                  <i className="fa fa-envelope-o" />{" "}
                </a>
              </div>
              <div className="pull-right">
                <a href="javascript:void(0);">
                  <i className="fa fa-bookmark-o" />{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="rightcolumn">
            <div className="top_sec">
              <div className="price pull-left">Advocate, Mumbai </div>
            </div>
            <div className="vendor-detail">
              <div className="business_title">
                About Advocate Devajyoti Barman
              </div>
              <div className="sub_content">
                <h2>
                  <a href="#" target="_blank" className="title">
                    Family Law
                  </a>
                </h2>
                <p className="business_info">
                  Marriage, Divorce, Alimony and maintenance, Restitution of
                  conjugal rights, Judicial separation, Domestic violence, Child
                  custody, Annulment of marriage, Muslim law
                </p>
              </div>
              <div className="vendor_btlinks">
                <div>
                  <div className="pull-left">
                    <a href="javascript:void(0);" className="fgh">
                      <i className="fa fa-heart-o" /> Shortlist
                    </a>
                  </div>
                  <div className="pull-right">
                    <a href="javascript:void(0);">
                      <i className="fa fa-eye" /> Quick View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
