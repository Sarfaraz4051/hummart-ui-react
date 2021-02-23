// import { IncreaseQuantity,DecreaseQuantity } from "./action";
// import { useDispatch } from "react-redux";

// export const findItemIndex = (cart_items,arg) => {
//   let index = -1;
//   index = cart_items.findIndex((i) => {
//     return arg.p_id === i.p_id;
//   });
//   return index;
// };

// export const handleInc = (cart_items,arg) => {
//   arg.quantity++;
//   let item_index = findItemIndex(arg);
//   cart_items.splice(item_index, 1, arg);
//   useDispatch(IncreaseQuantity(cart_items));
// };

// export const handleDec = (cart_items,arg) => {
//   let item_index = findItemIndex(arg);
//   if (arg.quantity > 1) {
//     arg.quantity--;
//     cart_items.splice(item_index, 1, arg);
//   } else {
//     cart_items.splice(item_index, 1);
//   }
//   useDispatch(DecreaseQuantity(cart_items));
// };
