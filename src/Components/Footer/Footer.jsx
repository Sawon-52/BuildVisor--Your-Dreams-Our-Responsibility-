const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <footer className="footer py-10 bg-ash text-white w-full md:w-4/5 mx-auto">
        <aside>
          <div className="font-syne text-4xl font-bold">
            <span className="text-primary">B</span>uild<span className="text-primary">V</span>isor
          </div>
          <p>
            BuildVisor Industries Ltd.
            <br />
            Providing reliable tech since 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="join">
              <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
              <button className="btn bg-primary join-item" onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
