import { useState, useEffect } from "react";
import { Header } from "./header";
import Button from "./button";
import Description from "./description"
import { TextBoxWithLabel } from "./textField";
import { NotFound } from "./noFound";


const TodayWeather = ({onSearch, data, show }) => {
    const [weatherData, setData] = useState({
        area: "",
        weather: "",
        desc: "",
        tempMin: 0,
        tempMax: 0,
        humidity: 0,
        time: "",
    })
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [found, setFound] = useState(true);
    const handleOnChange = (e) => {
        let name = e.target.name;
        name === "City" ? setCity(e.target.value.trimStart()) : setCountry(e.target.value.trimStart());
    }
    const handleOnClear = (e) => {
        setCity("")
        setCountry("")
        setData({
            area: "",
            weather: "",
            desc: "",
            tempMin: 0,
            tempMax: 0,
            humidity: 0,
            time: "",
        });
        setFound(true);
    }
    const handleOnSearch = () => {
        onSearch(city, country);
    }
    useEffect(() => {
        setData(data)
        setFound(show)
    }, [data, show])
    return <div className="today-weather">
        <Header title={"Today's Weather"} />
        <div className="form-control">
            <TextBoxWithLabel label="City" onChange={handleOnChange} value={city} />
            <TextBoxWithLabel label="Country" onChange={handleOnChange} value={country} />
            <Button handleOnClick={handleOnSearch} label="Search" />
            <Button handleOnClick={handleOnClear} label="Clear" />
        </div>
        {found &&
            <Description data={weatherData} />}
        {!found &&
            <NotFound />
        }
    </div>
}

export default TodayWeather;