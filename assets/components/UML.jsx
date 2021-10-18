const UMLS = ({ data }) => {
  let UML_list = [];
  Object.entries(data).forEach((types, j) => {
    Object.entries(types[1]).forEach((obj, i) => {
      UML_list.push(
        <UML
          type={types[0]}
          key={"UML_" + i + " " + j}
          object={{ name: obj[0], property: obj[1] }}
        />
      );
    });
  });
  return <div style={{ display: "flex" }}>{UML_list}</div>;
};

const UML = ({ object, type }) => {
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
          <li
            contentEditable="true"
            onKeyUp={({ target }) => {
              if (!target.innerHTML) target.remove();
            }}
            style={{ fontSize: "0.8rem" }}
          >
            {public_symbols[prop_public] +
              prop_name +
              (prop_type !== "" ? ":" + prop_type : "")}
          </li>
        );
      } else {
        li_field_vars.push(
          <li
            contentEditable="true"
            onKeyUp={({ target }) => {
              if (!target.innerHTML) target.remove();
            }}
            style={{ fontSize: "0.8rem" }}
          >
            {public_symbols[prop_public] +
              prop_name +
              (prop_type !== "" ? ":" + prop_type : "")}
          </li>
        );
      }
    }
  );
  let font_list = [
    "Montserrat",
    "Menlo",
    "Monaco",
    "Lucida Console",
    "Liberation Mono",
    "Segoe UI",
    "Roboto",
    "Oxygen",
  ];
  let border_list = ["solid", "dotted", "double", "outset"];
  let selected_font = font_list[Math.floor(Math.random() * font_list.length)];
  let selected_border =
    border_list[Math.floor(Math.random() * border_list.length)];
  let selected_border_radius =
    Math.floor(Math.random() * 2) == 0 ? "15px" : "0px";
  return (
    <div
      style={{
        border: "1px black " + selected_border,
        margin: "1rem",
        display: "flex",
        alignSelf: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: selected_border_radius,
        fontFamily: selected_font,
        color: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          alignSelf: "flex-start",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px black " + selected_border,
          width: "100%",
          padding: "0rem 1rem",
          position: "relative",
        }}
      >
        <h2
          style={{
            fontSize: "1rem",
            margin: "0px",
            padding: "0.3rem 0rem",
            borderRadius: Math.floor(Math.random() * 2) == 0 ? "100%" : "0%",
            border:
              "1px black " +
              border_list[Math.floor(Math.random() * border_list.length)],
            width: "1.3rem",
            height: "1.3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: "1rem",
          }}
        >
          {type[0]}
        </h2>
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
            borderTop: "1px black " + selected_border,
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
