import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import CartContext from '../CartContext';
import { useContext } from 'react';
import DropDownHeader from './DropDownHeader';
import { MenuItem } from '@mui/material';
import Fade from '@mui/material/Fade';


export default function Header() {
  const { item } = useContext(CartContext);
  console.log(item);

  const { items } = useContext(CartContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='Header'>
      <div className='top-background' />
      <div className='header-inner-container'>

        <div className='burger-menu'>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon className='burger-icon' sx={{fontSize: 35}} />
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <ul className='nav-container-burger'>
              <MenuItem onClick={handleClose}><Link to="/buecher" className='header-link'><li>Bücher</li></Link></MenuItem>
              <MenuItem onClick={handleClose}><Link className='header-link'><li>Englische Bücher</li></Link></MenuItem>
              <MenuItem onClick={handleClose}><Link className='header-link'><li>Spielwaren</li></Link></MenuItem>
              <MenuItem onClick={handleClose}><Link className='header-link'><li>Kalender</li></Link></MenuItem>
              <MenuItem onClick={handleClose}><Link className='header-link'><li>Schreibwaren</li></Link></MenuItem>
              <MenuItem onClick={handleClose}><Link className='header-link'><li>Unterhaltung</li></Link></MenuItem>
              <MenuItem onClick={handleClose}><Link className='header-link'><li>Technik</li></Link></MenuItem>
              <MenuItem onClick={handleClose}><Link className='header-link'><li>Geschenke</li></Link></MenuItem>
              <MenuItem onClick={handleClose}><Link className='header-link'><li>SALE</li></Link></MenuItem>
              <MenuItem onClick={handleClose}><Link className='header-link'><li>Weihnachten</li></Link></MenuItem>
          </ul>
          </Menu>
        </div>

        <div className="titel">
          <Link to="/" className="link">
            <h1>Boolib</h1>
          </Link>
        </div>

        <div className="input-container">
          <input type="text" placeholder="Titel, Autor, Stichwort, ISBN" />
          <SearchIcon className="search-icon" sx={{ fontSize: 50 }} />
        </div>

        <div className="header-icon-container">
          <div>
            <FmdGoodOutlinedIcon
              sx={{ fontSize: 35 }}
              className="header-icon"
            />
          </div>

          <div>
            <PersonOutlineOutlinedIcon
              sx={{ fontSize: 35 }}
              className="header-icon"
            />
          </div>

          <div>
            <FavoriteBorderOutlinedIcon
              sx={{ fontSize: 35 }}
              className="header-icon"
            />
          </div>

          <div>
            <Link to="/einkaufskorb">
              <LocalMallOutlinedIcon
                sx={{ fontSize: 35 }}
                className="header-icon"
              />
            </Link>
            <span>{items.length}</span>
          </div>
        </div>
      </div>
      <div className='nav-container'>
        <DropDownHeader />
      </div>
    </div>
  );
}
