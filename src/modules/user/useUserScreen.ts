import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@/navigation/types';

const useUserScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [doubledValue, setDoubledValue] = useState<number | null>(null);

  const navigation = useNavigation<StackNavigationProp>();

  function handleNavigationProfile() {
    navigation.navigate('Profile');
  }

  const handleDouble = () => {
    const intValue = parseInt(inputValue, 10);
    if (!isNaN(intValue)) {
      const doubled = intValue * 2;
      setDoubledValue(doubled);
    } else {
      setDoubledValue(null);
    }
  };

  return {
    onNavigationProfile: handleNavigationProfile,
    onDouble: handleDouble,
    onInputValue: setInputValue,
    inputValue,
    doubledValue,
  };
};

export { useUserScreen };
