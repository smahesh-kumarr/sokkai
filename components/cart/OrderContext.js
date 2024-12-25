import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orderData, setOrderData] = useState(null);
    return (
        <OrderContext.Provider value={{ orderData, setOrderData }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrderContext = () => useContext(OrderContext);
