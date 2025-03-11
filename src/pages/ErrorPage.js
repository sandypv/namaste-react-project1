// import { useRouteError } from "react-router";

const ErrorPage = () =>{
    // const err = useRouteError();
    // console.log(err);
    return (
        <div>
            <h1>Opps!!!</h1>
            <h1>Something went wrong!!!</h1>
            {/* <h2>{err.status}:{err.statusText}</h2> */}
        </div>
       
    )
}

export default ErrorPage;