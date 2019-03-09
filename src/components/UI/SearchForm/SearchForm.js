import React from 'react';

const searchForm = props => {

    return(
        <div className="SearchForm">
        <div ref={props.geocoderContainerRef}></div>
            {/* <form>
                <div className="SearchForm__group">
                    <label for="Search">Search Address</label>
                    <input type="text" id="Search" value="Enter a city & state, zip, or address"/>
                </div>

                <div className="SearchForm__group">
                <label for="Radius">Radius</label>
                    <select id="Radius">
                        <option>5 miles</option>
                        <option>10 miles</option>
                        <option>25 miles</option>
                        <option>50 miles</option>
                        <option>100 miles</option>
                    </select>
                </div>
                    <input type="submit" value="Search Divesites!"/>
            </form> */}
        </div>
    )
}
export default searchForm;