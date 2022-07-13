const GlanceCard = (props) => {
  return (
    <div>
      <h2>Current Class:</h2>
      <h3>{props.nameOfClass}</h3>
      <i class="bx bx-laptop"></i>
    </div>
  );
};

export default GlanceCard;