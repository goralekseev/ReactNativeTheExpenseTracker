import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://react-native-course-72cf4-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
}
