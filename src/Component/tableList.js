import { FaSearch, FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
const TableList = ({ data, index, onSearch, onDelete }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        data.id === 0 ? setShow(false) : setShow(true);
    }, [data])

    if (!show) {
        return null;
    }

    return <div className="table-row" key={index}>
        <div className="left" key={`left-${index}`}>
            {data.id}. {data.area}
        </div>
        <div className="right" key={`right-${index}`}>
            {data.time}
            <span className="search-icon" onClick={() => onSearch(data.city, data.country)}>
                <FaSearch />
            </span>
            <span className="trash-icon" onClick={() => onDelete(data.id)}>
                <FaTrashAlt />
            </span>
        </div>
        <hr key={`line-${index}`} />
    </div>
}

export default TableList;