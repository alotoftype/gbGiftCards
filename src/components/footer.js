import React from 'react';

const footer = () => {
    return ( 
        <>
        <footer>
            © {new Date().getFullYear()}, Built with
            {` lots of love `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </>
     );
}
 
export default footer;