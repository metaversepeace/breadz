const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title})  {
    return (
      
        <Default title = {title}>
            <link rel="shortcut icon" type="image/jpg" href='./assets/images/favicon.jpg>

            <h2>Index Page</h2>
        
            {/*<p>I have {breads[0].name} bread!</p> */}
            {/* This is a JSX comment*/}
        
                <ul>
                  {
                    breads.map((bread, index)=> {
                        return (
                            <li key={index}>
                                <a href={`/breads/${bread.id}`}>
                                    {bread.name}
                                </a>
                            </li>
                        )
                    })
                  }
                </ul>

        </Default>
        
    )
}

<div className="newButton">

    <a href="/breads/new"><button>Add a new bread</button></a>
    
</div>


module.exports = Index;