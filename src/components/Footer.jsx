import React from "react";

// let date = new date();
// let year = date.year();

function Footer() {
    const currentYear = new Date().getFullYear();
    // const currentYear = date.getFullYear();
    return (
        <footer>
        <p>copyright © {currentYear}</p>
        </footer>
    )
}

export default Footer;