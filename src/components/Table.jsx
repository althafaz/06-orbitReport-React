const Table = ({ sat }) => {

  const headersName = Object.keys(sat[0]).slice(1)
  headersName.splice(3,1)

  const displayHeader = (name) => {
    return (
      name === 'name' ? 'Name' : 
      name === 'launchDate' ? 'Launch Date' :
      name === 'type' ? 'Type of Satellite' :
      name === 'operational' ? 'Status' : 'unexepcted data'
    )
  }
  
  return (
    <table>
    <thead>
     <tr>
     {
     headersName.map((value,id) =>(<th key={id}>{displayHeader(value)}</th>))
     
     }
     </tr>
     </thead>
     <tbody>
      {sat.map((el)=>(
          <tr key={el.id}>
            <td>{el.name}</td>
            <td>{el.type}</td>
            <td>{el.launchDate}</td>
            <td>{(el.operational) ? 'active ' : 'inactive'}</td>
          </tr>
      ))}
     </tbody>
   </table>
  );
};

export default Table;