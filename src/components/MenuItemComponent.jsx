import { Link } from "react-router-dom"

export const MenuItemComponent = ({to, label}) => {
  return (
    <div className="menuItem">
        <Link to={to}>{label}</Link>
    </div>
  )
}