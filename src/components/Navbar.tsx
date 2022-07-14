import { Button, Container, Nav, Navbar, NavItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ILogged } from "../routes/PokemonRoutes";
import { AppDispatch, stateType } from "../state/store";
import { logout } from "../state/user/userSlice";


const NavBar : React.FC<ILogged> = ({ logged }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { name } = useSelector((state: stateType) => state.user);

  const logoutUser = () => {
    dispatch(logout());
  };

  //TODO: Change img route
  return (
    <div>
      <Navbar bg="dark">
        <Navbar.Brand>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="Pokemon List"
            style={{ marginLeft: "15px" }}
          />
        </Navbar.Brand>

        {logged && (
          <>
            <Nav className="me-auto">
              <NavItem>
                <Link
                  to="/list"
                  className="nav-link"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  List
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/search"
                  className="nav-link"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Search
                </Link>
              </NavItem>
            </Nav>

            <Navbar.Toggle />
            <Navbar.Collapse
              className="justify-content-end"
              style={{ marginRight: "20px" }}
            >
              <Navbar.Text className="signed-user">
                Signed in as: <b>{name}</b>
              </Navbar.Text>
              <Button onClick={logoutUser} variant="danger">
                Logout
              </Button>
            </Navbar.Collapse>
          </>
        )}
      </Navbar>
    </div>
  );
};

export default NavBar;
