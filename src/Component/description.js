const Description = ({data}) => {
    return <div className="description">
        <div className="area-title">{data.area}</div>
        <div className="weather-title">{data.weather}</div>
        <div className="title">Description:</div>
        <div className="desc">{data.desc}</div>
        <div className="title">Temperature:</div>
        <div className="desc">{data.tempMin.toFixed(2)}°C ~ {data.tempMax.toFixed(2)}°C</div>
        <div className="title">Humidity:</div>
        <div className="desc">{data.humidity}%</div>
        <div className="title">Time:</div>
        <div className="desc">{data.time}</div>
    </div>
}

export default Description;