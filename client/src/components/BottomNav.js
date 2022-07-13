import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Box from '@mui/material/Box'

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box mt={0.001} mb={3}>
    <BottomNavigation sx={{ width: '100%', height: '10%'}} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="최근 품목"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="찜 품목"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="매장위치"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="장바구니" value="basket" icon={<ShoppingBasketIcon />} />
    </BottomNavigation>
    </Box>
  );
}