// src/utils/orderUtils.js

export const saveOrder = (order) => {
  const orders = JSON.parse(localStorage.getItem('allOrders')) || [];
  orders.push(order);
  localStorage.setItem('allOrders', JSON.stringify(orders));
};

export const getAllOrders = () => {
  return JSON.parse(localStorage.getItem('allOrders')) || [];
};
