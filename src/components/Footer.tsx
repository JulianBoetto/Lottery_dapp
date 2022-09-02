import React from "react";

const Footer: React.FC = () => {

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Julián Boetto</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">                    
                    <li className="ms-3"><a className="text-muted" href="https://github.com/JulianBoetto" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/julianmatiasboetto/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a></li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;