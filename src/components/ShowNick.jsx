import {useGetUserByIdQuery} from "../App"
const ShowNick = () => {
    const { isFetching, data } = useGetUserByIdQuery({
      _id: "65bd4cf52232120c7c871cef",
    });
  
    if (isFetching) return <h1>loading......</h1>;
    return <h1>{data.UserFindOne.nick || "empty nick"}</h1>;
  };

  export default ShowNick

