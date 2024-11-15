function Box({ children }) {
  return (
    <div style={{ border: "2px solid black", margin:'10px', padding:'10px' }} className="box">
      {children}
    </div>
  );
}

export default Box;
