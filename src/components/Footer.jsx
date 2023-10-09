import React from "react";

function Footer() {
    const customDate = new Date().getFullYear();
    return(
            <footer> <p> Copyright ⓒ {customDate} </p> </footer>
    );
}

export default Footer;