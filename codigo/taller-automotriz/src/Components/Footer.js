import copy from '../Assets/copy.png';
import facebook from '../Assets/facebook.png';
import twitterBlanco from '../Assets/twitter-blanco.png';
import whatsapp from '../Assets/whatsapp.png';
function Footer(){
    return(
        <footer className="footer">
    <div className="container">
        <h5>TALLER AUTOMOTRIZ.</h5>
        <p>Ciudad, Departamento, Pais.</p> 
        <p>
            Lineas de atencion: Ciudad xxx xxx xxxx, Ciudad xxx xxx xxxx.
        </p>
        <a href="NONE">
            <p>Terminos y Condiciones.</p>
        </a>
        <hr className="hr"/>
    </div>
    <div className="container">
        <ul>
            <li>
                <img src={copy} alt="copyright" width="20px" height="20px" title="copyright"/>
            </li>
            <li>
                Talleres Automotriz.
            </li>
            <li className="li">
                <li>
                    <a href="NONE">
                        <img src={facebook} alt="Facebook" width="25px" height="25px" title="Facebook"/>
                    </a>
                </li>
                <li>
                    <a href="NONE">
                        <img src={whatsapp} alt="whatsapp" width="45px" height="25px" title="Whatsapp"/>
                    </a>
                </li>
                <li>
                    <a href="NONE">
                        <img src={twitterBlanco} alt="Twitter" width="25px" height="25px" title="Twitter"/>
                    </a>
                </li>
            </li>
        </ul>
    </div>
</footer>
    );
}
export default Footer