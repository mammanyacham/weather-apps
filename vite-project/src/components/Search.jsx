import searchIcon from "/images/icon-search.svg"

export default function Search({handleSubmit, getFormData,formData, errorMessage}) {
    return(
        <section className="search-section">
            <p>How's the sky looking today?</p>
            <form onSubmit={handleSubmit}>
                <div className="search search-input-div">  
                    <img src={searchIcon} className="search-icon"/>
                    <input type="text" placeholder="Search for a place..." name="location" onChange={getFormData} value={formData} />
                </div>  
                <button type="submit" className="search search-button">Search</button>
            </form>
        </section>
    )
}