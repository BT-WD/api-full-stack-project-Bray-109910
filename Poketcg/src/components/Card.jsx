export const Card = (name, imageUrl, type) => {
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

export function CardDisplay ({key, imageUrl,w, ypos}) {
  let h = 1.42 * w
  ypos = ypos * (h + 10)
  return (
    <div className="Dcard" style={{top: `${ypos}px`, position: 'absolute', right: '100%'}}> 
        <img src={imageUrl+"/low.png"} className="card-image" style={{width: w+"px", height: h+"px"}}/>     
    </div>
    )
}