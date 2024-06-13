import { getUser } from "../../redux/actions/auth";
import {  useDispatch, useSelector } from "react-redux";
const AuthProvider = ({ children }) => {
  const userId = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
  const dispatch = useDispatch()

  const loading = useSelector(state => state.user.loading)
  loading && userId &&  dispatch(getUser({ userId: userId }))
 const status = useSelector(state => state.user.status)
 const auth = useSelector(state => state.user.auth)



  return (<>{children}</>)  
};

export default AuthProvider;
