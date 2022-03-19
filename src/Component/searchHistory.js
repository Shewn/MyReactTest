import { Header } from "./header";
import { NoRecord } from "./noFound";
import TableList from "./tableList"
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux'

const data = state => state.historyData;
const SearchHistory = ({onHandleSearch, onHandleDelete}) => {
    const [record, setRecord] = useState(false);
    const historyData = useSelector(data)
    useEffect(() => {
        historyData.length > 1 ? setRecord(true) : setRecord(false)
    }, [historyData])
    return <div className="search-history">
        <Header title={"Search History"} />
        <div className="table">
            {!record && <NoRecord />}
            {record && historyData.map((history, index) => {
                return <TableList data={history} index={index} onSearch={onHandleSearch} onDelete={onHandleDelete} key={`history_${index}`}/>
            })}
        </div>
    </div>
}

export default SearchHistory;