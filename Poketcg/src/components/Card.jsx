const Card = (name, imageUrl, type) => {
  return (
    <div className="Pcard" style={{width: '81px', height: '116px'}}> 
        <img src={imageUrl} alt={name} className="card-image" />    
        <div className="card-content">
          <h3 className="card-title">{name}</h3>
          <p className="card-type">{type}</p>
        </div>  
    </div>
    )
}
export default Card

