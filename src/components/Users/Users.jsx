import './Users.scss'

function Users({ users }) {
  return (
    <div className='Users'>
      <div className="Users__header">
        <h1>Friend Requests</h1>
        <button>View All</button>
      </div>
      <div className="Users__list">
        {users.map(elem => {
          return (
            <div key={elem.id}>
              <img src={elem.image} alt={elem.fullName} />
              <h1>
                {elem.fullName}
                <br />
                <span>{elem.friendsCount} mutual friends</span>
              </h1>
              <button>Confirm</button>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Users;
