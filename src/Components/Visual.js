import './css/Visual.css'

function 
Visual({ title, text }) {


    return (
        <section id="visual">
            <h2 id="visual_title">
                {title}
            </h2>
            <p id="visual_text">
                {text}
            </p>
        </section>


    )
}

export default Visual