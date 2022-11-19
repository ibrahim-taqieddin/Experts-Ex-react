const Item = ({ ExSsymbol, ExRrate , ratesBase}) => {
  return (
    <div className="box ">
      <strong>{ExSsymbol}/{ratesBase}</strong><br />
      <span> { ExRrate.toFixed(3)}</span>
    </div>
  );
};

export default Item;
