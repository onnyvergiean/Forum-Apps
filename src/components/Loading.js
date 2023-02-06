import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="Loading">
      <LoadingBar showFastActions />
    </div>
  );
}

export default Loading;
