function DonaProps(props) {
    return(
      <div>
        <img src={props.imagem} />
        <h2>{props.titulo}</h2>
        <p>{props.paragrafo}</p>
      </div>
    )
  }
  
  export default DonaProps