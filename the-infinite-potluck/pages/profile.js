import PropTypes from 'prop-types';
import SecureTemplate from '../static/secure-template';

const Profile = ({ loggedInUser }) => (
  <div>
    Hi { loggedInUser.nickname }! <img src={ loggedInUser.picture } width="100px" />
    <div>
      <style jsx>{`
         pre {
           width: 500px;
           background: #ddd;
           white-space: pre-wrap;
         }
       `}
       </style>
      <pre>{ JSON.stringify(loggedInUser, null, 2) }</pre>
    </div>
  </div>
)

Profile.propTypes = {
  loggedInUser: PropTypes.object
};

export default SecureTemplate(Profile);