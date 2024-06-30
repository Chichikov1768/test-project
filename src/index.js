import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




// class AdminPage extends Component {
//   render() {
//     let root = this.props.match.url;
//     return (
//       <div>
//         <Route path={`${root}/`} component={AdminMainPage} />
//         <Route path={`${root}/dashboard`} component={AdminDashboardPage} />
//       </div>
//     );
//   }
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// export default {getGQL,jwtDecode}
