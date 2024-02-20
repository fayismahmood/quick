export function clickOutside(node: HTMLElement, evnt: () => any) {
  // the node has been mounted in the DOM

  window.addEventListener("click", handleClick);

  function handleClick(e: any) {
    if (!node.contains(e.target)) {
      evnt();
    }
  }

  return {
    destroy() {
      // the node has been removed from the DOM
      window.removeEventListener("click", handleClick);
    },
  };
}
