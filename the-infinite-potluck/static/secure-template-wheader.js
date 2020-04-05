import React from 'react';
import Nav from '../components/nav';
import { getTokenForBrowser, getTokenForServer } from '../static/auth';

export default Page => class SecureTemplateWHeader extends React.Component {
  static async getInitialProps({ req }) {
    const loggedInUser = process.browser ? await getTokenForBrowser() : await getTokenForServer(req);
    const pageProperties = await Page.getInitialProps && await Page.getInitialProps(req);
    return {
      ...pageProperties,
      loggedInUser,
      isLoggedIn: !!loggedInUser
    }
  }

  render() {
    if (!this.props.isLoggedIn) {
      return (
        <div>
          <Nav { ...this.props} />
          <div style={{display: "flex", justifyContent:"center", paddingTop:"50px"}}>
            <h3>Please <a href="/login">sign in</a> before continuing</h3>
          </div>
        </div>
      )
    }
    return (
      <div>
        <Nav { ...this.props} />
        <Page { ...this.props } />
      </div>
    )
  }
}