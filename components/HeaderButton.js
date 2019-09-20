import React from 'React';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../Constants/Colors';

const CustomerHeaderButton = (props) => {
  return (
    <HeaderButton 
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color="white"
     />
  );
};

export default CustomerHeaderButton;