import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from '../components/head';
import PropTypes from 'prop-types';
import template from '../static/template';

const Home = ({ loggedInUser }) => {

  return (
    <div>
      <Head title="Home" />
      <div className="hero">
        <div className="header">
          <img src="/favicon.ico" className="logo"/>
          <h1 className="title">Cookies</h1>
        </div>
        <div>
          {loggedInUser ? <div>Welcome, <a className="user">{loggedInUser.nickname}</a></div> : ""}
        </div>
        <div className="main">
          <Link href="/recipeWiki">
            <a className="card">
              <h3>Broadcast your recipe</h3>
              <p>Choose a recipe and share the process with the world!</p>
            </a>
          </Link>
          <Link href="/watcher">
            <a className="card">
              <h3>Watch a stream</h3>
              <p>Experience the process of cooking a variety of dishes!</p>
            </a>
          </Link>
        </div>
        <Link href="/credits">
            <a className="footer">
              <h3> Credits </h3>
            </a>
        </Link>
      </div>
      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          font-size: 48px;
        }
        .header {
          display: flex;
          flex-direction: row;
          padding-top: 80px;
          padding-bottom: 20px;
        }
        .logo {
          width: 80px;
          height: 80px;
        }
        .title {
          padding-left: 10px;
          padding-top: 10px;
        }
        .user {
          color: #067df7;
        }
        .main {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        }
        .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items:center;
          padding: 18px 18px 18px;
          margin: 50px;
          width: 220px;
          height: 280px;
          text-decoration: none;
          color: #434343;
          border:2px solid #067df7;
          background: #F0F8FF;
          box-shadow:5px 5px 2px grey;
        }
        .card:hover {
          background: #87CEFA;
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 28px;
          text-align:center;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          text-align:center;
          font-size: 13px;
          color: #333;
        }
        .footer {
          padding-top: 30px;
        }
        .footer h3 {
          font-size: 15px;
        }
      `}</style>
    </div>
  );
};
Home.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default template(Home);
