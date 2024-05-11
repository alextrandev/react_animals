export default function debounce(func, delay) {
  let timer; // hold timer id, so when deboune called again, previous timer is reset
  return function (...parameters) { // rest operator here to pass on parameters
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, parameters), delay);
  } // execute given function with debounce and all parameters
}
