import PropTypes from "prop-types";

function Greeting({ name }) {
  return (
    <>
      <h1>Привет {name}!</h1>
    </>
  );
}

export default Greeting;
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};
