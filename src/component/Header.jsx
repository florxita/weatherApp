const Header = ({ toggleStyles }) => {
  return (
    <div onChange={toggleStyles} className="header flex col">
      <figure className={`img-content-logo`}></figure>
      <h4></h4>
    </div>
  );
};
export default Header;
