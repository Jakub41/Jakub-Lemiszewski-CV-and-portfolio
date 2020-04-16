const Timeout = async (setIsLoaded) => {
  setTimeout(() => {
    setIsLoaded(true);
  }, 3000);
};

export default Timeout;
