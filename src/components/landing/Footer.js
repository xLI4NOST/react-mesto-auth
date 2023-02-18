import React from "react";
function Footer (){
  let today = new Date()
  let year = today.getFullYear()

    return(
        <footer className="footer">
        <h2 className="footer__copyright">
          © {year} Проект: Mesto. Волков Дмитрий
        </h2>
      </footer>
    )
}
export default Footer