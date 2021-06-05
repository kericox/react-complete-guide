import './Card.css'
const Card = (props) => {
    const classes = 'card ' + props.className
    return(
        <div className={classes}>{props.children}</div>       
    )
}

export default Card

// // ==========================================================

// import './Card.css'

// function Card(props) {
//     const classes = 'card ' + props.className
//     return <div className={classes}> {props.children} </div>
//     // return <div className='card'>{props.children}</div>
// }
// export default Card