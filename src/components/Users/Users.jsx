import React from "react";
import './Users.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeDropper, faEyeLowVision, faEyeSlash, faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Ui/Button/Button';

function Users({ data, setPasswordId, showPasswordID, handleDeelete }) {
  return <div className='Users'>
    <h1>Out Users</h1>
    <section className="Users__list">
      {
        data.map((user) => {
          return (
            <div key={user.id}>
              <Button icon={faXmark} variant='danger' size="small" rounded onClick={() => handleDeelete(user.id)} />
              <h2>{user.username}</h2>
              <p>
                <span>email</span>
                {user.email}

              </p>
              <p>
                <span>password</span>
                {showPasswordID === user.id ? user.password : "*".repeat(12)}
                { }
                <button className='icon' onClick={() => setPasswordId(user.id)}>

                  {showPasswordID === user.id
                    ? <FontAwesomeIcon icon={faEyeSlash} />
                    : <FontAwesomeIcon icon={faEye} />
                  }
                </button>
              </p>
            </div>
          )
        })
      }
    </section>

  </div>;
}

export default Users;
