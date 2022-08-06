import React  from 'react';


export default function BlockSearch(){
    const [showsearch, setShowSearch] = React.useState();
        return (
            <div className="block-search">
                <div className="action search" onClick={() => setShowSearch(!showsearch)}>
                    <span className="material-icons">search</span>
                </div>
                <form className={`search-content ${showsearch ? "show-search" : ""}`}>
                    <div className = "field search">
                        <div className = "control">
                            <input id="search" type="text" name="q" placeholder="Search entire store here..." className="input-text"></input>
                        </div>
                    </div>
                </form>
            </div>
        )
}