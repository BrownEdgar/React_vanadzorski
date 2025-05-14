import axios from 'axios';

import { useSelector } from 'react-redux';
import { getAllTwetts } from '../../features/twetts/twettsSlice';

function AddForm() {
  const twetts = useSelector((state) => getAllTwetts(state))
  const handleSubmit = (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    const user = Object.fromEntries(formdata);
    user.id = Math.round(Math.random() * 1e5)
    user.image = './images/photo2.png'
    // dispatch(saveTwett(user))

    const x = twetts.data.some(elem => elem.username.toLowerCase() === user.username.toLowerCase())
    if (!x) {
      axios.post(import.meta.env.VITE_DB_URL, user)
        .then(() => window.location.reload())
    } else {
      alert("userExist")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id='name' name='name' placeholder='name' />
      <input type="text" id='username' name='username' placeholder='username' />
      <textarea name="description" id="description" placeholder='description' rows={6}></textarea>
      <input type="submit" value="save" />
    </form>
  );
}

export default AddForm;
