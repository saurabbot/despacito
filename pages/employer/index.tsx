import React, { FC } from "react";
import PropTypes from "prop-types";

interface Props {}

const index: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <main>
      <section>
        <h1>Index</h1>
      </section>
    </main>
  );
};

index.propTypes = {
  // Define prop types here
};

export default index;
