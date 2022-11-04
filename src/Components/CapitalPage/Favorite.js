import Capital from './Capital'

const capitals  = ['Paris', 'Moscou' , 'Washington' , 'Amsterdam' , 'Bruxelles' , 'Londres' , 'Madrid' , 'Tokyo'];

const Favorite  = () => {
    
    return (
        <div>
            {capitals.map((capital, i) => {
                return(
               <Capital ville={capital} key= {i}/>
                )
            })}
        </div>
    )
}

export default Favorite;

//<Capital ville = {capital}/>