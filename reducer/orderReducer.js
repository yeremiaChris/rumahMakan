// reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementOrder':
      return {
        makan: [
          ...state.makan.map((data) =>
            data.key === action.id && data.quantity >= 0
              ? {...data, quantity: data.quantity + 1}
              : data,
          ),
        ],
      };
      break;
    case 'decrementOrder':
      return {
        makan: [
          ...state.makan.map((data) =>
            data.key === action.id && data.quantity > 0
              ? {...data, quantity: data.quantity - 1}
              : data,
          ),
        ],
      };
      break;
    case 'orderItem':
      return {
        makan: [
          ...state.makan.map((data) =>
            data.key === action.id && data.quantity > 0
              ? {
                  ...data,
                  orderColor: '#114444',
                  orderText: 'Ordered',
                  order: true,
                }
              : data,
          ),
        ],
      };
      break;
    case 'cancelOrderItem':
      return {
        makan: [
          ...state.makan.map((data) =>
            data.key === action.id && data.quantity > 0
              ? {
                  ...data,
                  orderColor: 'orange',
                  orderText: 'Order',
                  order: false,
                }
              : data,
          ),
        ],
      };
      break;
    case 'urutMakan':
      return {
        makan: [...state.makan.sort((data) => data.jenis !== action.test)],
      };
    case 'reset':
      return {
        makan: [
          ...state.makan.map((data) => {
            return {
              ...data,
              orderColor: 'orange',
              orderText: 'Order',
              order: false,
              quantity: 0,
            };
          }),
        ],
      };
    default:
      break;
  }
};
