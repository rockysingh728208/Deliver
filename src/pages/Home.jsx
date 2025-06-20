import React, { useContext } from 'react';
import Nav from '../components/Nav';
import Categories from '../Category';
import Card from '../components/Card';
import food_items from '../food';
import { dataContext } from '../context/UserContext';
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import UserPayment from '../components/UserPayment'; // ✅ QR Code component

const Home = () => {
  const { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  const filter = (category) => {
    if (category === "All") {
      setCate(food_items);
    } else {
      const newList = food_items.filter(item => item.food_category === category);
      setCate(newList);
    }
  };

  const Items = useSelector(state => state.cart);
  const subtotal = Items.reduce((total, item) => total + item.qty * item.price, 0);
  const deliveryFee = 20;
  const taxes = subtotal * 0.5 / 100;
  const total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div className="w-full bg-slate-200 min-h-screen">
      <Nav />

      {/* Categories */}
      {!input && (
        <div className="flex flex-wrap justify-center items-center gap-6">
          {Categories.map((item, index) => (
            <div
              key={index}
              className="w-[140px] h-[140px] bg-white gap-5 flex flex-col p-5 text-[20px] font-bold text-gray-600 rounded-lg shadow-lg hover:bg-green-300 cursor-pointer transition-all duration-200"
              onClick={() => filter(item.name)}
            >
              {item.image}
              {item.name}
            </div>
          ))}
        </div>
      )}

      {/* Card List */}
      <div className="flex flex-wrap gap-9 pt-6 pb-8 items-center justify-center w-full">
        {cate.length > 0 ? (
          cate.map(item => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              category={item.food_category}
              type={item.food_type}
            />
          ))
        ) : (
          <div className="text-center text-xl font-semibold text-gray-600">No dish found</div>
        )}
      </div>

      {/* Cart Sidebar */}
      <div className={`md:w-[40%] w-full h-full fixed top-0 right-0 bg-white transition-all duration-500 overflow-auto z-50 ${showCart ? "translate-x-0" : "translate-x-full"}`}>
        <header className="w-full flex items-center justify-between p-6">
          <span className="text-green-400 text-[18px] font-semibold">Order Items</span>
          <RxCross2
            className="text-green-400 text-[30px] font-semibold cursor-pointer hover:text-red-600"
            onClick={() => setShowCart(false)}
          />
        </header>

        {Items.length > 0 ? (
          <>
            <div className="flex pt-4 w-full gap-3 flex-col">
              {Items.map(item => (
                <Card2
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>

            {/* Price Summary */}
            <div className="w-full border-t-2 border-gray-600 pt-4 gap-4 flex flex-col items-center p-4">
              <div className="flex w-full justify-between items-center text-lg">
                <span>Subtotal</span>
                <span className="text-green-500">₹{subtotal}</span>
              </div>

              <div className="flex w-full justify-between items-center text-lg">
                <span>Delivery Fee</span>
                <span className="text-green-500">₹{deliveryFee}</span>
              </div>

              <div className="flex w-full justify-between items-center text-lg">
                <span>Taxes</span>
                <span className="text-green-500">₹{taxes.toFixed(2)}</span>
              </div>

              <div className="w-full border-t-2 border-gray-600 pt-2" />

              <div className="flex w-full justify-between items-center text-2xl font-bold">
                <span>Total</span>
                <span className="text-green-600">₹{total}/-</span>
              </div>

              <button
                className="w-[80%] bg-blue-500 hover:bg-blue-400 transition-all duration-200 text-white py-2 rounded-md"
                onClick={() => {
                  toast.success("Order Placed! Please complete the payment.");
                }}
              >
                Place Order
              </button>

              {/* QR Code + UPI Payment */}
              <UserPayment total={total} />
            </div>
          </>
        ) : (
          <div className="text-center text-2xl text-green-500 font-semibold mt-6">Empty Cart</div>
        )}
      </div>
    </div>
  );
};

export default Home;
