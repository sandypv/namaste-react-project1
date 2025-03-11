//Higher Order Component - takes component as a argument and returns a new component as output

const withPromotedLabel = (OriginalComponent) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white mx-4">Promoted</label>
        <OriginalComponent {...props} />
      </div>
    );
  };
};

export default withPromotedLabel;
