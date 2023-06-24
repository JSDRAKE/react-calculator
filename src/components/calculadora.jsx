

const Calculadora = () => {

    return (

        <div className="wrapper">

            <section className="screen">

                0

            </section>

            <section className="calc-buttons">

                <div className="calc-button-row">

                    <button className="calc-button double">C</button>

                    <button className="calc-button">&larr;</button>

                    <button className="calc-button">&divide;</button>

                </div>

                <div className="calc-button-row">

                    <button className="calc-button">7</button>

                    <button className="calc-button">8</button>

                    <button className="calc-button">9</button>

                    <button className="calc-button">&times;</button>

                </div>

                <div className="calc-button-row">

                    <button className="calc-button">4</button>

                    <button className="calc-button">5</button>

                    <button className="calc-button">6</button>

                    <button className="calc-button">&minus;</button>

                </div>

                <div className="calc-button-row">

                    <button className="calc-button">1</button>

                    <button className="calc-button">2</button>

                    <button className="calc-button">3</button>

                    <button className="calc-button">+</button>

                </div>

                <div className="calc-button-row">

                    <button className="calc-button">0</button>

                    <button className="calc-button">.</button>

                    <button className="calc-button triple">=</button>

                </div>

            </section>

        </div>

    )
}


export default Calculadora