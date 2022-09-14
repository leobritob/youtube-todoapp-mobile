import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { Theme } from '../../themes';

type Props = {
  variant?: 'primary' | 'light';
  label?: string;
  icon?: any;
  disabled?: boolean;
  onPress?: VoidFunction;
};

export function Button({
  variant = 'primary',
  label,
  icon,
  disabled = false,
  onPress,
}: Props) {
  let touchableOpacityStyles: any = { backgroundColor: Theme.colors.primary };
  let textStyles = { color: '#fff' };
  if (variant === 'light') {
    touchableOpacityStyles = {
      backgroundColor: '#fff',
      elevation: 0.5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 5,
      shadowOpacity: 0.15,
    };
    textStyles = { color: Theme.colors.primary };
  }
  if (disabled) {
    touchableOpacityStyles = {
      backgroundColor: '#ccc',
    };
  }
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, touchableOpacityStyles]}
    >
      {!!label && <Text style={[styles.text, textStyles]}>{label}</Text>}
      {!!icon && <Image source={icon} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
