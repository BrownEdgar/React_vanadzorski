import "@/sass/Footer.scss";

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <footer>
      <div className="container footer__grid">
        <div>
          <h2>Get the latest Rolling updates</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" id="email" placeholder='Enter your email' />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
        <div></div>
        <div></div>
        <div className='fluid '></div>
      </div>
    </footer>
  );
}

export default Footer;
