function Grid({ className, component }) {
  return (
    <div
      className={className}
      style={{
        width: "19rem",
        height: "19rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {component}
    </div>
  );
}

export default Grid;
