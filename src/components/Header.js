import React from "react";

export default function Header({name}) {
  return (
    <header className="d-print-none">
      <div className="container text-center text-lg-left mt-">
        <div className="py-3 clearfix">
          <h1 className="site-title mb-0">{name}</h1>
          <div className="site-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://twitter.com/shaista__Naaz?t=08wBlRGuEXwIY_gooCdwrA&s=08"
                    target="_blank" rel="noopener noreferrer"
                    title="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                    <span className="menu-title sr-only">Twitter</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://wa.me/9534034129"
                    target="_blank" rel="noopener noreferrer"
                    title="Whatsapp"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <span className="menu-title sr-only">Whatsapp</span>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/Shaista79"
                    target="_blank" rel="noopener noreferrer"
                    title="Github"
                  >
                    <i className="fab fa-github"></i>
                    <span className="menu-title sr-only">Github</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
