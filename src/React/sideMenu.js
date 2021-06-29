import * as React from 'react';
import '../Css/sideMenu.css';
import { Link } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import {sideMenuList} from './Data'

class SideMenu extends React.Component {
    render() {
        return (
            <div className={this.props.name}>
                <div className={this.props.buttonName}>
                    <Button onClick={this.props.handleClick}><CloseIcon /></Button>
                </div>
                {sideMenuList.map((current, index) => {
                    return (
                        <li className="listTitle">
                            <a href={current.items.Link}> {current.title} </a>
                            <ListChildren items={current.items} handleClick={current.handleClick} />
                        </li>
                    )
                })}
            </div>
        )
    }
}

const ListChildren = ({ items, handleClick }) => {
    return(
      items.map((current, index) => {
        return (
            <li className="listChild">
                <button onClick={handleClick}>
                    <Link href={current.Link}> {current.Name}
                    </Link>
                </button>
            </li>
        )
    }))
}


export default SideMenu;