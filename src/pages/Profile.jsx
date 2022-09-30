import React from 'react'
import { connect } from 'react-redux'
import Layout from '../hocs/Layout'
import Card from '../components/Card'
// import style from '../assets/styles/Card.module.css'


const Profile = ({user}) => {

  return (
    <Layout>
      <Card>
        profile
      </Card>
    </Layout>
  )
}

const mapStateToProps = (state) =>({
  user:state.rootReducer.auth.user,
})

export default connect(mapStateToProps) (Profile);