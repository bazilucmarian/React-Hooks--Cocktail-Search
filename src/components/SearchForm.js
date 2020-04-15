import React, {useRef, useEffect} from 'react';

const SearchForm=({setSearchTerm})=> {
    const searchValue=useRef("")
    useEffect(()=>{
        searchValue.current.focus();

    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()

    }
    const searchCocktail=()=>{
        setSearchTerm(searchValue.current.value)

        

    }
    return (
        <section className="setction">
            <h2 className="section-title">Search cocktails</h2>
            <form className="form search-form" onSubmit={handleSubmit}
            >
                <div className="form-control">
                    <label htmlFor="name">Search ypur favourite cocktail</label>
                    <input type="text" name="name" id="name" ref={searchValue} onChange={searchCocktail}/>
                </div>

            </form>

        </section>
    )
}

export default SearchForm;
