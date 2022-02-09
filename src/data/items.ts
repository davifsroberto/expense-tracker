import { Item } from '../types/Item';

export const items: Item[] = [
  {
    date: new Date(2022, 2, 9),
    category: 'food',
    title: 'McDonalds',
    value: 32.12,
  },

  {
    date: new Date(2022, 1, 1),
    category: 'food',
    title: 'Burger King',
    value: 28,
  },

  {
    date: new Date(2022, 1, 2),
    category: 'rent',
    title: 'Rent',
    value: 2300,
  },

  {
    date: new Date(2022, 2, 1),
    category: 'salary',
    title: 'Salary',
    value: 45000,
  },
];
