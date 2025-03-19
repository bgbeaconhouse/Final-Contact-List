

const SelectedContactRow = ({ setSelectedContactId, contact}) => {
    return (  
        <tr
        onClick={() => {
          setSelectedContactId(contact.id)
        }}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>{contact.username}</td>
      <td>{contact.website}</td>
    </tr>
    );
}
 
export default SelectedContactRow;