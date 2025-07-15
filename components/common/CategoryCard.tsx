import React from 'react';
import styles from './styles/CategoryCard.module.css';
import { Text } from '@telegram-apps/telegram-ui';
import { useTheme } from '@/theme/ThemeContext'; // ✅ Correct import for theme hook

interface CardProps {
  icon: React.ElementType;
  title?: string;
  onClick?: () => void;
  className?: string;
  type?: 'round' | 'square' | 'rectangle';
  size?: 'x-small' | 'small' | 'medium' | 'large';
}

const CategoryCard: React.FC<CardProps> = ({
  icon: Icon,
  title,
  onClick,
  className,
  type = 'square',
  size = 'medium',
}) => {
  const { colors } = useTheme(); // ✅ Get current theme colors
  const cardClass = `${styles.card} ${styles[type]} ${styles[size]} ${className || ''}`;

  return (
    <div
      className={cardClass}
      onClick={onClick}
      style={{ backgroundColor: colors.primaryBlack }}
    >
      {/* <Icon className={styles.icon}/> */}
      <Text weight="3" style={{ color: colors.text }}>
        {title}
      </Text>
    </div>
  );
};

export default CategoryCard;
