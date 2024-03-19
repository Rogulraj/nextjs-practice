import React from "react";

type PropsType = {
  params: {
    slug: string[];
  };
};

function Docs(props: PropsType) {
  const { params } = props;
  const { slug } = params;

  if (slug?.length === 1) {
    return <h1>docs features {slug[0]}</h1>;
  } else if (slug?.length === 2) {
    return (
      <h1>
        docs features {slug[0]} and concept {slug[1]}
      </h1>
    );
  }
  return <h1>docs page</h1>;
}

export default Docs;
