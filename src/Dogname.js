import React from 'react'

const Dogname = (props) => {

    // const renderSomeDogs = [...props.dogs].slice(0, 10).map(dog => <div className="render">
    const renderSomeDogs = [...props.dogs].map(dog => <div className="render">
        <div>{dog.name}</div>
        <p>{dog.life_span}</p>
        <p>{dog.bred_for}</p>
        <div><p> {dog.temperament}</p></div>
         <p>{dog.weight.imperial}</p>
        <img id="update-img" src={dog.image.url} alt="breeds" /></div>)
console.log(renderSomeDogs);
    return (

        <div>
            <div>
            {renderSomeDogs}
            </div>
        </div>

    )
}
export default Dogname
