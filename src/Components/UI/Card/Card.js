import { Link } from 'react-router-dom'
import classes from './Card.module.css'

const Card = (props) => {

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{props.name}</h2>
      <p className={classes.para}>{props.text}</p>
      <Link to="/seller">
      <button className={classes.btn}>Know More</button></Link>
    </div>
  )
}

export default Card