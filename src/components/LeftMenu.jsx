
import {Link} from "react-router-dom";
import {useGetRootCatsQuery,backEndUrl} from "../App"





const LeftMenu = () => {
  const { isLoading, data } = useGetRootCatsQuery(); //хук повертає об'єкт, схожий з результатом useFetch, і це не дивно;
  console.log(isLoading, data);
  return isLoading ? (
    <h1>
      Loading
      <img src="http://i.pinimg.com/originals/24/07/b5/2407b512f6f2eec61cd2f3136242a025.gif" />
    </h1>
  ) : (
    <ul>
      {
        data.CategoryFind.map((cat) => (
          <li key={cat._id}>
            <Link to={`/category/${cat._id}`}>{cat.name}</Link>
          </li>
        )) //місцевий getGQL не викідує зайві ключи
      }
    </ul>
  );
};

  export default LeftMenu



  // const LeftMenu = () => {
//     const { isFetching, data={}} = useGetRootCatsQuery(); //хук повертає об'єкт, схожий з результатом useFetch, і це не дивно;
//     console.log(useGetRootCatsQuery)
//     return isFetching ? (
//       <h1>
//         Loading
//         <img src="http://i.pinimg.com/originals/24/07/b5/2407b512f6f2eec61cd2f3136242a025.gif" />
//       </h1>
//     ) : (
//       <ul>
//         {
//           ((data.CategoryFind && data.CategoryFind.map((cat) => (
//             <li key={cat._id}>
//               <Link to={`/category/${cat._id}`}>{cat.name}</Link>
//             </li>
//           )))) //місцевий getGQL не викідує зайві ключи
//         }
//       </ul>
//     );
//   };
