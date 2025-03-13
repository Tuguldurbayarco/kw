export function clickOutside(node: any, callbackFunction: any) {
  function handleClick(event: any) {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      callbackFunction();
    }
  }

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}
