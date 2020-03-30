import React from 'react';
import Link from 'next/link';
import Auth from '../lib/Auth';

const auth = new Auth();

/** login handle from https://medium.com/techintoo/setting-up-auth0-with-react-nextjs-4346c303bb5b **/

export default class Nav extends React.Component {

  handleLogin(){
    auth.login();
  }

  componentDidMount(){
    let login = document.getElementById('login');
    login.addEventListener("click", () => {
      this.handleLogin();
    });
    var user_data = localStorage.getItem('user_details');
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn && user_data){
        login.addEventListener("click", () => {
          auth.logout();
        });
        login.innerHTML = 'Logout';
    }
}

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <ul>
            <li>
              <Link href="/secure-page">
                <a>Dashboard</a>
              </Link>
            </li>
            <li>
              <a id="login" >Login / Register</a>
            </li>
          </ul>
        </ul>

        <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
        'Arial', sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
      </nav>
    )
  }
}
