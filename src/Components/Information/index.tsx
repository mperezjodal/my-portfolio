import './styles.css';
import '../../App.css';
import pic from './DALLE.png'

function MainInfoComponent() {
    return (
        <div className="MainInfoComponent">
            {/* <div className="pic">
                
            </div> */}
            
            <div className="About">
                
                <p>
                    My passions are: ideas, technology, literature and people.
                    My dream is to help create new and inspiring innovations.
                </p>
                <p>
                    I’m awed by the immensely wonderful culture we are a part of,
                    and thrilled when attempting to conceive what may come next.
                    I am optimistic and skeptical.
                </p>
                <p>
                    I constantly try to undertake new challenges.
                    In team discussions, I like pondering those
                    ideas that I believe are being understated
                    and giving them a say.
                </p>
            </div>
            <img src={pic} alt="Cartoon portrait of young student who is programming, performing math calculations, reading literature and thinking philosophically" />
        </div>

    );
}

export default MainInfoComponent;