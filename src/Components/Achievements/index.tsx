import './styles.css';
import '../../App.css';

function AchievementsComponent() {  
    return (
        <div className="AchievementsComponent">
            <p className="Title">
                Achievements
            </p>
            <p>
                <strong>First Place in Uruguay's Mathematical Olympiad</strong> (<i>2017 and 2018</i>)<br /> 
                <br /> 
                Second and third places in 2016 and 2015.
            </p>
            <br /> 
            <p>
                <strong>3-time contestant in the <a href="https://www.imo-official.org" target="_blank">International Mathematical Olympiad</a> </strong> (<i>2017, 2018 and 2019</i>)
                <br /> 
            </p>
            <br /> 
            <p>
                <strong>Full scholarship in ORT University  </strong>
                <br /> 
            </p>
        </div>
    );
}

export default AchievementsComponent;