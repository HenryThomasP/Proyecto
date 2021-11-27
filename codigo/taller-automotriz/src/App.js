import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import paso1 from './Assets/paso1.PNG'
import './Styles/plantilla.css';
function App() {
  return (
    <div>
    <NavBar/>
<main className="main">
    <div className="container">
        <p>La empresa <strong>Taller Automotriz</strong>  ofrece servicios de reparación, 
            mantenimiento, y mucho mas solo siga los siguientes pasos.
        </p>
    </div>
    <div className="container">
        <table>
            <tr>
                <th colspan="2">
                    <button className="button" id="boton1" type="submit" onclick="funcionBoton1();">1</button>
                    <button className="button" id="boton2" type="submit" onclick="funcionBoton2();">2</button>
                    <button className="button" id="boton3" type="submit" onclick="funcionBoton3();">3</button>
                    <button className="button" id="boton4" type="submit" onclick="funcionBoton4();">4</button>
                    <button className="button" id="boton5" type="submit" onclick="funcionBoton5();">5</button>
                    <button className="button" id="boton6" type="submit" onclick="funcionBoton6();">6</button>
                    <button className="button" id="boton7" type="submit" onclick="funcionBoton7();">7</button>
                </th>
            </tr>
            <tr>
                <td>
                    <p id="parrafo" className="margin">Elija el tipo de servicio que necesite, ingrese su nombre completo, 
                    ingrese la placa de su vehiculo, ingrese su correo electronico y haga 
                    click en siguente. </p>
                </td>
                <td>
                    <div className="margin">
                        <img src={paso1} id="paso1" alt="paso1"/>
                    </div>
                </td>
            </tr>
        </table><br/>
    </div>
    <div className="container">
        <p>
            Si quiere agendar una cita, 
            <a href="registro1.html">haga click aqui.</a>
        </p>
        <p>
            Si quiere ver el estado de su vehiculo, 
            <a href="loginEstado.html">haga click aqui</a>
        </p><br/>
    </div>
</main>
<Footer/>
</div>  
  );
}

export default App;
