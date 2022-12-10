import axios from "axios";
import useAuth from "./useAuth";
import { useCookies } from "react-cookie";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const auth = useAuth();
  const [cookies] = useCookies(["keju-exa-portal"]);

  const isPersist = cookies?.persist || false;
  const user = auth?.user ? auth.user : cookies ? cookies.user : null;
  const roles = user
    ? user.role.map((r) => {
        return r.roleName;
      })
    : null;
  const accessToken = auth?.user
    ? auth.accesToken
    : cookies
    ? cookies.accessToken
    : null;

  const refresh = async () => {
    console.log("inside refresh method");
    const auth =
      isPersist && accessToken
        ? setAuth((prev) => {
            return { ...prev, roles, accessToken };
          })
        : await axios
            .get("authenticate/refresh", {
              withCredentials: true,
            })
            .then((response) => {
              const newAccessToken = response?.data?.jwtToken;
              const newRoles = response?.data?.user.role.map((r) => {
                return r.roleName;
              });
              return setAuth((prev) => {
                console.log(JSON.stringify(prev));
                console.log(newAccessToken);
                return { ...prev, newRoles, newAccessToken };
              });
            });
    return auth.accessToken;
  };
  return refresh;
};
export default useRefreshToken;
