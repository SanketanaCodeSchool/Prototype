// in src/Layout.js
import { Layout } from 'react-admin';
import { myMenu } from './Menu';

export const myLayout = (props) => <Layout {...props} menu={myMenu} />; 