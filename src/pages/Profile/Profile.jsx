import React from "react";
import Layout from "../../hocs/Layout/Layout";
import { connect } from "react-redux";
import style from "./profile.module.css";
import ProfileEditForm from '../../components/ProfileEditForm/ProfileEditForm'

const Profile = ({ user, profile }) => {
  console.log(profile);
  return (
    <>
    <Layout>
      <div id={style.profileform}>
        <div id={style.formphoto}>
          <img src={profile.profile.profile_pic} alt="profilepic" />
          <hr />
          <label htmlfor="avatar">Choose a profile picture:</label>
          <hr />
          <input
            type="file"
            id="profile_pic"
            name="profile_pic"
            accept="image/png, image/jpeg"
          />
          <hr />
          <button className="btn">upload</button>
          <hr />
        </div>
        <div id={style.data}>
          <div id={style.login_data}>
            <div className={style.row}>
              <div className={style.col4}>
                <h3>Account details: </h3>
              </div>
              <div className={style.col8}>
                <button>Edit</button>
              </div>
            </div>
            <hr />
            <div className={style.row}>
              <div className={style.col4}>
                <strong>Email *</strong>
              </div>
              <div className={style.col8}>{user.email}</div>
            </div>
            <hr />
            <div className={style.row}>
              <div className={style.col4}>
                <strong>Username *</strong>
              </div>
              <div className={style.col8}>{user.username}</div>
            </div>
            <hr />
          </div>
          <div id={style.personal_data}>
            <div className={style.row}>
              <div className={style.col4}>
                <h3>Personal data: </h3>
              </div>
              <div className={style.col8}>
                <button>Edit</button>
              </div>
            </div>
            <hr />
            <div className={style.row}>
              <div className={style.col4}>
                <strong>First Name *</strong>
              </div>
              <div className={style.col8}>{profile.first_name}</div>
            </div>
            <hr />
            <div className={style.row}>
              <div className={style.col4}>
                <strong>Last Name *</strong>
              </div>
              <div className={style.col8}>{profile.last_name}</div>
            </div>
            <hr />
            <div className={style.row}>
              <div className={style.col4}>
                <strong>Gender *</strong>
              </div>
              <div className={style.col8}>{profile.profile.gender}</div>
            </div>
            <hr />
            <div className={style.row}>
              <div className={style.col4}>
                <strong>Date of birth *</strong>
              </div>
              <div className={style.col8}>{profile.profile.birth_date}</div>
            </div>
            <hr />
            <div className={style.row}>
              <div className={style.col4}>
                <strong>My Role *</strong>
              </div>
              <div className={style.col8}>{profile.profile.user_type}</div>
            </div>
            <hr />
            <div className={style.row}>
              <div className={style.col4}>
                <strong>Blood Group *</strong>
              </div>
              <div className={style.col8}>{profile.profile.blood_group}</div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </Layout>
    <ProfileEditForm/>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.rootReducer.auth.user,
  profile: state.rootReducer.auth.profile,
});

export default connect(mapStateToProps)(Profile);
