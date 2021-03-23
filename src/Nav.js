import React from 'react'

const Nav = (props) => {

    return (
        <div>
            <button className="newPage" onClick={() => props.redirect("all-dogs")}>Click here to get all the dogs</button>
            {/* <div>{props.redirect}</div> */}
        </div>
    )
}

export default Nav
