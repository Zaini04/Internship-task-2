import React, { useState , useEffect} from "react";
import HomeNav from "../Components/HomeNav";
import { useCart } from "../context/Context";


function OrderHistory() {

    // const {orders} = useCart();
     const [orders, setOrders] = useState([]) 

  useEffect(()=>{
    const storedOrders  = JSON.parse(localStorage.getItem('orders')) || []
    setOrders(storedOrders)
  },[])
    
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <HomeNav />
      <div className="w-full flex justify-center items-center mt-6 py-8 overflow-x-hidden">
        <p className="w-9/12 md:w-5/12 font-bold text-center text-xl te justify-center items-center">
          Your order details will be here
        </p>
      </div>
      <div className="mt-4 w-11/12 overflow-x-scroll">
        <table className="w-full mt-8 text-sm ">
          <thead className="bg-[#F2F2F2]">
            <tr>
              <th className="border p-2 border-[#CCCCCC] text-[#878787]">Date</th>
              <th className="border p-2 border-[#CCCCCC] text-[#878787]">Order #</th>
              <th className="border p-2 border-[#CCCCCC] text-[#878787]">Products</th>
              <th className="border p-2 border-[#CCCCCC] text-[#878787]">Delivery Fee</th>
              <th className="border p-2 border-[#CCCCCC] text-[#878787]">Total Amount</th>
              <th className="border p-2 border-[#CCCCCC] text-[#878787]">Status</th>
            </tr>
          </thead>
          <tbody className="w-full">
                {
                    orders.map((order,index)=>(
                        <tr key={index} className="w-11/12 text-xs  ">
                           
                            <td className="border   border-[#CCCCCC] text-center  justify-center items-center p-2 ">{order.date}</td>
                            <td className="border border-[#CCCCCC] text-center justify-center items-center p-2 ">{order.id}</td>
                            {order.products.map((p,i)=>(
                                <td key={i} className="border text-justify flex flex-col  w-32 sm:w-full  border-[#CCCCCC] p-2 ">
                                  <span>{p.des.split(" ").slice(0, 3).join(" ")}... * {p.quantity} </span>
                                  </td>
                            ))}
                            <td className="border border-[#CCCCCC] text-center p-2 ">{order.deleveriyFee}</td>
                            <td className="border border-[#CCCCCC] text-center p-2 ">{order.totalAmount}</td>
                            <td className="border border-[#CCCCCC] text-center p-2 text-[red] ">{order.status}</td>
                        </tr>
                    ))
                }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderHistory;
