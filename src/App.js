import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, fetchUsers} from "./services/user.api";
import {fetch_Users, pushUser} from "./redux/actions";
// import {FETCH_USERS, PUSH_USER} from "./redux/actions/actionTypes";
// import {fetch_Users, pushUser} from "./redux/actions/actions";

export default function App() {
    let state = useSelector(state => {
        console.log(state);
        let {rootReducer} = state;
        return rootReducer;
    });
    let dispatch = useDispatch();
    let {users} = state;
    useEffect(()=>{
fetchUsers().then(value => {
    dispatch(fetch_Users(value));
});
    },[]);
    let onSubmit = (e) => {
        e.preventDefault();
       let name = e.target.name.value;
       let user = {name};
       addUser(user).then(value => {
           console.log('saved user ->', value);
           dispatch(pushUser(value));
       });
    };
    // let onclickClearState = ()=> {
    //     dispatch({type: 'CLEAR_STORE'});
    // };
    //
    // function onclickSetState() {
    //    fetchUsers().then(value => dispatch({type: 'FETCH_USERS', payload: value}));
    // }

    return (

    <div>
        <form onSubmit={onSubmit}>
            <input type="text" name={'name'}/>
            <button>add user</button>
        </form>
        {/*<hr/>*/}
        {/*<button onClick={onclickClearState}>clear users</button>*/}
        {/*<hr/>*/}
        {/*<button onClick={onclickSetState}>set users to store</button>*/}
        {/*<hr/>*/}
        {users.map((value) => <div key={value.id}>{value.name}</div>)}
    </div>
  );
}


