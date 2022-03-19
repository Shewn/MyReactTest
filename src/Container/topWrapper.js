import TodayWeather from "../Component/todayWeather"

const TopWrapper = ({onSearch, data, show}) => {
    return <div className="top-wrapper">
        <TodayWeather onSearch={onSearch} data={data} show={show}/>
    </div>
}

export default TopWrapper;