import { format, isValid, parseISO } from 'date-fns';

export const formatDate = (date: string | Date, formatString: string = 'MMM dd, yyyy'): string => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(dateObj)) {
      throw new Error('Invalid date');
    }
    return format(dateObj, formatString);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
};
