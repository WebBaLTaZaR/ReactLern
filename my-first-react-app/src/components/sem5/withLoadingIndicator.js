function withLoadingIndicator(WrapperComponent) {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <h2>Загрузка...</h2>;
    }
    return <WrapperComponent {...props} />;
  };
}

export default withLoadingIndicator;
