const vuexStorage = options => {
  const key = options.key || "store";
  const storage = options.persist ? localStorage : sessionStorage;
  return store => {
    const local = storage.getItem(key);
    if (local) {
      store.replaceState(JSON.parse(local));
    }
    store.subscribe((mutation, state) => {
      requestIdleCallback(() => {
        storage.setItem(key, JSON.stringify(state));
      });
    });
  };
};

export { vuexStorage };
