const Coin = ({ name, price }) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <h1>{name}</h1>
                    <p className="coin-symbol"></p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Rs.{price}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin