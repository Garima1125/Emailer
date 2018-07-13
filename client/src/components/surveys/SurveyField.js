//SurveyFiel contains logic to render a simple label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="container">
      <label className="black-text">{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
