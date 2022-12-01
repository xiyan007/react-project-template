import { Outlet, Link } from 'react-router-dom';
import { connect } from 'react-redux'

const Layout = (props) => {
  return (
    <div>
      <header>Account: { props.account} </header>
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
      <Outlet />
      <div>{props.children}</div>
    </div>
  );
};

const mapStateToProps = ({ common: { account } }) => ({ account })

export default connect(mapStateToProps)(Layout);
