"use client";

import React from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

function ErrorBoundry(props: ErrorProps) {
  const { error, reset } = props;
  return (
    <div>
      <h1>Error in the Blog Two : {error.message}</h1>
      <button type="button" onClick={reset}>
        retry
      </button>
    </div>
  );
}

export default ErrorBoundry;
