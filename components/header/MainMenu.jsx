import Link from "next/link";
import { useRouter } from "next/router";

const MainMenu = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src="/images/logo/logo_01.png" alt="" width={95} />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className="nav-item active">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          {/* End li (home mega menu) */}

          <li className="nav-item  dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Pages
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link href="/about-us" className="dropdown-item">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="dropdown-item">
                  <span>Portfolio</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* End li (pages) */}

          <li className="nav-item">
            <Link className="nav-link" href="/portfolio" role="button">
              Portfolio
            </Link>
          </li>
          {/* End li (portfolio) */}

          <li className="nav-item dropdown">
            <Link className="nav-link" href="/blog">
              Blog
            </Link>
          </li>
          {/* End li (blog) */}

          <li className="nav-item">
            <Link className="nav-link" href="/contact" role="button">
              Contact
            </Link>
          </li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}
      </div>
    </nav>
  );
};

export default MainMenu;
