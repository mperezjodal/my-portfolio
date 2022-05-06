import './styles.css';
import '../../App.css';

function SecondInfoComponent() {
    return (
        <div className="SecondInfoComponent">
            <p className="Title">
                Education
            </p>
            <p>
                <strong><a href="https://fi.ort.edu.uy/ingenieria-en-sistemas" target="_blank">Systems Engineering</a></strong> (<i>2019 through 2023</i>) - Universidad ORT Uruguay<br /> 
                <br /> 
                I'm currently finishing the 5 year graduate degree in Systems Engineering with a full scholarship awarded for the first place in the Uruguayan Mathematical Olympiad.
                Grade average: 92%, scholarship  available <a href="https://drive.google.com/file/d/1MG8yrrOKGgWv7fRpl6lMQjim82-2A-l_/view?usp=sharing" target="_blank">here</a>.
            </p>
            <br /> 
            <p>
                <strong><a href="https://www.fhuce.edu.uy/index.php/ensenanza/licenciaturas/licenciatura-en-filosofia" target="_blank">BA in Philosophy</a></strong> (<i>2019 through 2020</i>) - Universidad de la República<br /> 
                <br /> 
                Completed one third of this degree's courses. Scholarship <a href="https://drive.google.com/file/d/1fVrB1g8WBe0604VaLCB54IcJlB10dlm4/view?usp=sharing" target="_blank">here</a>.
            </p>
        </div>
    );
}

export default SecondInfoComponent;