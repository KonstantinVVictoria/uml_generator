const UMLS = ({ data }) => {
  let UML_list = [];
  Object.values(data).forEach((types, j) => {
    Object.entries(types).forEach((obj, i) => {
      UML_list.push(
        <UML
          key={"UML_" + i + " " + j}
          object={{ name: obj[0], property: obj[1] }}
        />
      );
    });
  });
  return <div style={{ display: "flex" }}>{UML_list}</div>;
};

const UML = ({ object }) => {
  let li_methods = [];
  let li_field_vars = [];
  Object.entries(object.property).forEach(
    ([prop_name, [prop_type, prop_public, prop_is_func]]) => {
      let public_symbols = {
        public: "+",
        protected: "",
        private: "-",
      };
      if (prop_is_func) {
        li_methods.push(
          <li style={{ fontSize: "0.8rem" }}>
            {public_symbols[prop_public] +
              prop_name +
              (prop_type !== "" ? ":" + prop_type : "")}
          </li>
        );
      } else {
        li_field_vars.push(
          <li style={{ fontSize: "0.8rem" }}>
            {public_symbols[prop_public] +
              prop_name +
              (prop_type !== "" ? ":" + prop_type : "")}
          </li>
        );
      }
    }
  );
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "1rem",
        display: "flex",
        alignSelf: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignSelf: "flex-start",
          justifyContent: "center",
          borderBottom: "1px solid black",
          width: "100%",
          padding: "0rem 1rem",
        }}
      >
        <h1 style={{ fontSize: "1rem", margin: "0px", padding: "0.3rem 1rem" }}>
          {object.name}
        </h1>
      </div>

      {li_field_vars.length ? (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",

            width: "100%",
            padding: "0rem 0.3rem",
          }}
        >
          <ul style={{ listStyleType: "none", padding: "0", margin: "0.5rem" }}>
            {li_field_vars}
          </ul>
        </div>
      ) : null}
      {li_methods.length ? (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
            borderTop: "1px solid black",
            padding: "0rem 0.3rem",
          }}
        >
          <ul style={{ listStyleType: "none", padding: "0", margin: "0.5rem" }}>
            {li_methods}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
export default UMLS;