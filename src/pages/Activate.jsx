import Card from '../hocs/Card';
import style from '../assets/styles/Home.module.css';
import {Navigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';

const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false);

    const { uid, token } = useParams();

    const verify_account = e => {
      
        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
        return <Navigate to='/' />
    }
  return (
    <div >
      <Card>
      <h3>Verify your Account:</h3>
                <button
                    onClick={verify_account}
                    type='button'
                    className={style.btn}
                >
                    Verify
                </button>
      </Card>
    </div>
  )
}

export default connect(null, { verify })(Activate);