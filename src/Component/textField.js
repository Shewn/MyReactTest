export const TextBoxWithLabel = ({label, onChange, value}) => {
    return <div className="textBox">
        <label className="text-label">{label}:</label>
        <input type="text" name={label} onChange={onChange} value={value}/>
    </div>
}
