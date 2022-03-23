import './styles.css';
import '../../App.css';

function SecondInfoComponent() {
    return (
        <div className="SecondInfoComponent">
            <p className="Title">
                Education
            </p>
            <p>
                <strong>Systems Engineering</strong> (<i>2019 through 2023</i>) - Universidad ORT Uruguay<br /> 
                <br /> 
                Finishing the 5 year graduate degree in Systems Engineering with a full scholarship awarded for the first place in the Uruguayan Mathematical Olympiad.
                Grade average: 93%, scholarship available here.
            </p>
            <br /> 
            <p>
                <strong>BA in Philosophy </strong> (<i>2019 through 2020</i>) - Univerdidad de la República<br /> 
                <br /> 
                Completed one third of this degree's courses.
            </p>
        </div>
    );
}

export default SecondInfoComponent;