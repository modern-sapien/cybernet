import SearchObj from "./../SearchObj/SearchObj"


const SearchModal = () => {
    return (
    <>
        <div className="search-modal row">
            <div className="col s11 m11 l11 nomargin-nopadding"></div>
            <div className="col s1 m1 l1">X</div>
            <form className="col s12 m12 l12 nomargin-nopadding" action="">
                <input type="text"/>
            </form>
            <SearchObj />
            <SearchObj />
            <SearchObj />
            <SearchObj />
            <SearchObj />
            <SearchObj />
            <SearchObj />
        </div>
        <div className="search-modal-background "></div>
    </>
    );
};

export default SearchModal;