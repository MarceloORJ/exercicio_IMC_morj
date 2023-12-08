import{useState, useEffect} from "react";
import './style.css';

const Calculadora = () => {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState('');
    const [botao] = useState(false);
    
    const calcularIMC = () => {
        const imc = peso / (altura * altura);
        return imc;
    };

    const calcular = (evento) => {
        evento.preventDefault();
        const imc = calcularIMC();

        if(imc < 18.5){
            setResultado('Magreza');
        }
        else if(imc >= 18.5 && imc < 25){
            setResultado('Normal');
        }
        else if(imc >= 25 && imc <30){
            setResultado('Sobrepeso');
        }
        else if(imc >= 30 && imc <40){
            setResultado('Obesidade');
        }
        else{
            setResultado('Obesidade grave');
        }
    };

    const getResultado = () => {
        if (resultado('Magreza')) {
            return 'magreza';
        } else if (resultado('Normal')) {
            return 'normal';
        } else if (resultado('Sobrepeso')) {
            return 'sobrepeso';
        } else if (resultado('Obesidade grave')) {
            return 'obesidade-grave';
        } else if (resultado('Obesidade')) {
            return 'obesidade';
        } else {
            return '';
        }
    }

    return (
        <div className="container">
            <div className="calculadora">
                <div className="campoAltura">                    
                    <label htmlFor="altura">Digite sua altura:</label>
                    <input className="alturaInput" type="number" onChange={evento => setAltura(evento.target.value)} />
                </div>
                <div className="campoPeso">
                    <label htmlFor="peso">Digite seu peso:</label>
                    <input className="pesoInput" type="number" onChange={evento => setPeso(evento.target.value)} />
                </div>
                <button disabled={botao} className="botao" type="submit" onClick={calcular}>Calcular</button>
            </div>


            {resultado &&(
                <>
                    <div className="resultado">
                        <p className="imc">Seu IMC é: {parseInt(calcularIMC())}, com uma classificação: {resultado}</p>
                    </div>
                </>
            )}
        </div>

    )
}

export default Calculadora;
