const Bookingarea = () => {
  return (
    <div
      className="booking__area"
      style={{
        backgroundImage: `url('/img/bg/banner.jpg')`,
        backgroundSize: 'cover',  // Changed from cover to contain
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat', // Prevents image from repeating
        width: '100vw', // Ensures full width of the viewport
      }}
    >
      <div style={{ aspectRatio: 16 / 3 }}></div>
    </div>
  );
};

export default Bookingarea;
