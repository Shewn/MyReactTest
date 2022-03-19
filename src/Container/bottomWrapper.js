import SearchHistory from "../Component/searchHistory";

const BottomWrapper = ({onSearch, onDelete}) => {
    return <div className="bottom-wrapper">
        <SearchHistory onHandleSearch={onSearch} onHandleDelete={onDelete}/>
    </div>
}

export default BottomWrapper;