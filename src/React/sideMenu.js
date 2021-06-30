import * as React from 'react';
import '../Css/sideMenu.css';
import { Link } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { Heading } from '@chakra-ui/layout'
import {sideMenuList} from './Data'
import { HashLink } from 'react-router-hash-link';

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
                            <Heading size="md"> {current.title} </Heading>
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
                    <HashLink to={current.Link}> {current.Name}
                    </HashLink>
                </button>
            </li>
        )
    }))
}


export default SideMenu;