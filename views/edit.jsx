const React = require('react')
const Default = require('./layouts/Default')

function Edit ({bread, bakers}) {
    return (
      <Default>
        <label htmlFor="baker">Baker</label>
        <select name="baker" id="baker" defaultValue={bread.baker}>
            {bakers.map((baker) => {
                return(
                    <option value={baker.id} key={baker.id}>{baker.name}</option>
                )
            })}
        </select>
      </Default>
    )
}
