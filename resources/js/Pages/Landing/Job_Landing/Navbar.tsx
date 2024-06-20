import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import '../Job_Landing/Styles/Navbar.scss';
import {
  Collapse,
  Container,
  NavbarToggle,
  NavLink,
  Dropdown,
  DropdownButton,
  Badge,
} from "react-bootstrap";
import Logo from '../../../../images/img/logo.png';
import { Link, usePage } from "@inertiajs/react";
import { Inertia } from '@inertiajs/inertia';

const Navbar = () => {
  const { auth } = usePage().props;

  const user = auth.user;

  const [isOpenMenu, setisOpenMenu] = useState<boolean>(false);
  const [navClass, setnavClass] = useState<any>("");

  const toggle = () => setisOpenMenu(!isOpenMenu);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  const scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setnavClass(" is-sticky");
    } else {
      setnavClass("");
    }
  };

  const [activeLink, setActiveLink] = useState<any>();
  useEffect(() => {
    const activation = (event: any) => {
      const target: any = event.target;
      if (target) {
        target.classList.add('active');
        setActiveLink(target);
        if (activeLink && activeLink !== target) {
          activeLink.classList.remove('active');
        }
      }
    };
    const defaultLink: any = document.querySelector('.navbar li.a.active');
    if (defaultLink) {
      defaultLink?.classList.add("active")
      setActiveLink(defaultLink)
    }
    const links = document.querySelectorAll('.navbar a');
    links.forEach((link) => {
      link.addEventListener('click', activation);
    });
    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', activation);
      });
    };
  }, [activeLink]);

  const handleLogout = () => {
    Inertia.post(route('logout'));
  };

  return (
    <React.Fragment>
      <nav
        className={
          "navbar navbar-expand-lg navbar-landing fixed-top job-navbar" +
          navClass
        }
        id="navbar"
      >
        <Container fluid className="custom-container">
          <Link className="navbar-brand" href="/dashboard">
            <img
              src={Logo}
              className="card-logo card-logo-dark"
              alt="logo dark"
            />
          </Link>
          <NavbarToggle
            onClick={toggle}
            className="navbar-toggler py-0 fs-20 text-body"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu"></i>
          </NavbarToggle>

          <Collapse className="navbar-collapse d-flex justify-content-end" in={isOpenMenu}>
            <>
              <Scrollspy
                offset={-18}
                items={[
                  "hero",
                  "process",
                  "categories",
                  "findJob",
                  "candidates",
                  "blog",
                ]}
                currentClassName="active"
                className="navbar-nav align-items-center mt-2 mt-lg-0"
                id="navbar-example"
              >
                <li className="nav-item">
                  <NavLink className="fs-16 text-white" href="#hero">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="fs-16 text-white" href="about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="fs-16 text-white" href="#categories">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="fs-16 text-white" href="#findJob">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="fs-16 text-white" href="#candidates">
                    Contact
                  </NavLink>
                </li>

                {user ? (
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={<Badge bg="primary" className="fs-14 text-uppercase">{user.name.charAt(0)}</Badge>}
                    variant="dark"
                  >
                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item href="/settings">Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>


                  </DropdownButton>
                ) : (
                  <Link href="/login" className="btn btn-soft-primary">
                    <i className="ri-user-3-line align-bottom me-1"></i> Login &
                    Register
                  </Link>
                )}
              </Scrollspy>


            </>
          </Collapse>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
