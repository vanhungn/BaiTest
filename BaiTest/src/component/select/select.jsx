import "./select.css"

export const Select = ({content}) => {
    return (
        <div className="select">
            <span>{content}
            </span>
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                <path
                    d="M5 7L10 12L15 7"
                    stroke="#555555"
                    strokeWidth="2"
                />
            </svg>
        </div>
    )
}