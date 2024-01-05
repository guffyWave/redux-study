import { Fragment } from 'react';
import MainHeader from './MainHeader';
import { showNotifications } from '../app-redux/uiSlice';
import { useSelector } from 'react-redux';

const Layout = (props) => {
  const { status, title, message } = useSelector((state) => state.uiManager);

  return (
    <Fragment>
      {status ? (
        <div
          style={{
            background: status === 'LOADING' ? '#ff0' : status === 'SUCCESS' ? '#0f0' : '#f00',
          }}
        >
          <p>{title} </p>
          <p>{message} </p>
        </div>
      ) : null}

      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
