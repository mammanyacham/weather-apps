import searchIcon from "/images/icon-search.svg"

export default function Search(props) {
    return(
        <section className="search-section">
            <p>How's the sky looking today?</p>
            <form onSubmit={props.handleSubmit}>
              <div className="search search-input-div">  
                 <img src={searchIcon} className="search-icon"/>
                 <input type="text" placeholder="Search for a place..." name="location" onChange={props.getFormData} value={props.formData} />
               </div>  
                 <button type="submit" className="search search-button">Search</button>
              
            </form>
        </section>
    )
}