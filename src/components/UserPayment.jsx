import React from 'react';

const UserPayment = ({ total }) => {
  const upiLink = `upi://pay?pa=7282089286-2@ybl&pn=Sagar%20Kashyap&am=${total}&cu=INR`;

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <h2 className="text-lg font-bold text-green-600">Scan to Pay</h2>
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(upiLink)}&size=200x200`}
        alt="UPI QR Code"
        className="w-40 h-40"
      />
      <a
        href={upiLink}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Or Tap to Pay ₹{total}
      </a>
    </div>
  );
};

export default UserPayment;
