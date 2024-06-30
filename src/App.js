import React, { useState, useEffect, useRef, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {Router,Route,Link,Redirect,useParams,Switch,} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import GoodPage from "./components/GoodPage";
import Footer from "./components/Footer";
import PageMain from "./components/PageMain";
import PageAbout from "./components/PageAbout";
import CatPage from "./components/CatPage"
import Header from "./components/Header";
import LoginForm from "./components/LoginFrom";
import Header2 from "./components/Header2"
import SearchAppBar from "./components/Header3";
import Header3 from "./components/Header3";
import Goodslist from "./components/GoodsList";
import LoginForm2 from "./components/LoginForm2";





const history = createHistory();
const preloader =
  "https://i.pinimg.com/originals/24/07/b5/2407b512f6f2eec61cd2f3136242a025.gif";

const backEndUrl = "http://shop-roles.node.ed.asmer.org.ua";
// const graphQlURL = `${backEndUrl}/graphql`;
// const gql = getGQL(graphQlURL);



const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, payload: null },
  reducers: {
    login(state, { payload: token }) {
      //другий параметр - об'єкт екшона, token потрапляє в ключ payload
      // console.log('LOGIN', state, token)
      const payload = jwtDecode(token);
      if (payload) {
        state.payload = payload;
        state.token = token;
      }
      // return {payload, token}
    },
  },
});

const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: "http://shop-roles.node.ed.asmer.org.ua/graphql",
    //      prepareHeaders(headers, {getState}){
    //          ....
    //      }
  }),
  endpoints: (builder) => ({
    getRootCats: builder.query({
      query: () => ({
        document: `query {
                                    CategoryFind(query: "[{\\"parent\\": null}]"){
                                        _id name
                                    }
                                }`,
      }),
    }),
    login: builder.mutation({
      query: ({ login, password }) => ({
        document: `
                        query login($login: String, $password: String) {
                            login(login: $login, password: $password) 
                        }
                        `,
        variables: { login, password },
      }),
    }),
    getCategoryById: builder.query({
      query: ({ _id }) => ({
        document: `query oneCat($query: String){
                        CategoryFindOne(query:$query){
                            _id name goods{
                                _id name price images{
                                    url
                                }
                            }
                            parent {
                                        name
                                         _id
                                       }
                                      subCategories {
                                         _id
                                        name
                                       }
                        }
                    }
                    `,

        variables: { query: JSON.stringify([{ _id }]) },
      }),
    }),
    getGoodById: builder.query({
        query: ({ _id }) => ({
          document: `
            # Запрос для нахождения товара по айди
            query gf2($query:String){
                GoodFindOne(query:$query){
                  _id name price description,categories {
                                _id
                                createdAt
                                name
                              }
                              images {
                                url
                              }
                }
              }
          `,
  
          variables: { query: JSON.stringify([{ _id }]) },
        }),
      }),
  }),
});

function jwtDecode(token) {
  let res;
  try {
    res = token.split(".")[1];
    return JSON.parse(atob(res));
  } catch {}
}

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [api.reducerPath]: api.reducer, //підключення слайса, створеннного createApi
    // cart:cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), //додаємо мідлварь
});

const {
  useGetRootCatsQuery,
  useLoginMutation,
  useGetCategoryByIdQuery,
  useGetUserByIdQuery,
  useSetUserNickMutation,
  useGetGoodByIdQuery
} = api;









const PageAdd = () => (
  <>
    <h1>Сторінка додавання</h1>
    <Add />
  </>
);

const Add = () => {
  const { pivo, moloko } = useParams();
  return (
    <pre>
      pivo + moloko = {pivo} + {moloko} = {+pivo + +moloko}
    </pre>
  );
};

const PagePost = ({
  match: {
    params: { _id },
  },
}) => (
  <>
    <h1>Сторінка поста #{_id}</h1>
  </>
);
const DashboardPage = () => {
  return <h1>страница пользователя </h1>;
};
const Page404 = () => <h1>Oups 404</h1>;

// const AdminPage = ()=>{
//     return <h1>Страница Админа</h1>
// }
const AdminMainPage = () => {
  <h1>Админ мейн</h1>;
};

const AdminDashboardPage = () => {
  <h1>Админ дашборд</h1>;
};



const actionAuthLogin = (payload) => ({ type: "auth/login", payload });
// const actionCartAdd 

store.subscribe(() => console.log(store.getState()));
store.dispatch(
  authSlice.actions.login(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2NWJkNGNmNTIyMzIxMjBjN2M4NzFjZWYiLCJsb2dpbiI6InRzdDE3IiwiYWNsIjpbIjY1YmQ0Y2Y1MjIzMjEyMGM3Yzg3MWNlZiIsInVzZXIiXX0sImlhdCI6MTcxMjM0MTgxM30.7FqHFLh3a65bOQUoR_SMn9krBGvH8N7Vsm0kBosVEI8"
  )
);
// setTimeout(() => store.dispatch(authSlice.actions.login('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2NWJkNGNmNTIyMzIxMjBjN2M4NzFjZWYiLCJsb2dpbiI6InRzdDE3IiwiYWNsIjpbIjY1YmQ0Y2Y1MjIzMjEyMGM3Yzg3MWNlZiIsInVzZXIiXX0sImlhdCI6MTcxMjM0MTgxM30.7FqHFLh3a65bOQUoR_SMn9krBGvH8N7Vsm0kBosVEI8')), 3000)
// setTimeout(() => store.dispatch(authSlice.actions.logout()), 8000)



const ChangeNick = () => {
  const [nick, setNick] = useState("");
  const [updateNick, { isFetching, data }] = useSetUserNickMutation();
  const { isFetching: isFetchingFromBackend, data: dataFromBackend } =
    useGetUserByIdQuery({ _id: "65bd4cf52232120c7c871cef" });
  useEffect(() => {
    if (dataFromBackend?.UserFindOne?.nick)
      setNick(dataFromBackend.UserFindOne.nick);
  }, [isFetchingFromBackend, isFetching]);

  // console.log(dataFromBackend.UserFindOne.nick)
  return (
    <div>
      <input value={nick} onChange={(e) => setNick(e.target.value)} />
      <button
        onClick={() => updateNick({ _id: "65bd4cf52232120c7c871cef", nick })}
      >
        Update nick
      </button>
    </div>
  );
};

console.log(api);




// const GoodCard = ({ good }) => {
//   const dispatch = useDispatch();

//   return (
//     <div class='goodCard'>
//         <div>
//       <h2>{good.name}</h2>
//       <button onClick={()=>{
//         //dispatch(actionCartAdd(good))
//       }}>+</button>
//       </div>
//     </div>
//   );
// };




// const GoodPage=({good})=>{
//     const { _id } = useParams(); //наприклад, беремо _id категорії із роутінгу
//     const { isFetching, data } = useGetGoodByIdQuery({ _id });
//     
//   if (isFetching) return (<div>Loading...</div>);


// }
  



function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header3 />
        <main>
          <Switch>
            <Route path="/" component={PageMain} exact />
            <Route path="/about" component={PageAbout} exact />
            <Route path="/add/:pivo/:moloko" component={PageAdd} />
            <Route path="/post/:_id" component={PagePost} />
            <Route path="/loginform" component={LoginForm2} exact />
            <Route path="/category/:_id" component={Goodslist} exact /> 
            <Route path='/good/:_id' component={GoodPage} exact/>
            <Route path="/dashboard" component={DashboardPage} exact />
            {/* <Route path="/admin" component={AdminPage} exact /> */}
            <Page404 />
          </Switch>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
}
export { backEndUrl, useLoginMutation, store, useGetGoodByIdQuery, useGetRootCatsQuery,useGetUserByIdQuery,useGetCategoryByIdQuery  };
export default App;

