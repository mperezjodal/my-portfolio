import './styles.css';

function Bottom() {
    return (
        <div className='bottom'>
            <p>
            <a
                className="App-link"
                href="https://www.linkedin.com/in/marcelo-pérez-jodal-28553454/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Linkedin
            </a>
            {` - `}
            <a
                className="App-link"
                href="https://docs.google.com/document/d/1vwrNnzLY6xrv-Bw4-4OlKnJOdnlTU-nWStVYlXaGYZc/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                Resume
            </a>
            {` - `}
            <a
                className="App-link"
                href="mailto:mperezjodal@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Email
            </a>
            </p>
        </div>
    );
}

export default Bottom;
