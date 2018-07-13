import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label className="white-text form-label">{label} : </label>
                 {' '}        {formValues[name]}
      </div>
    );
  });

  return (
    <div className="container">
        <div>
        <h5 className="result-review">Please confirm your entries</h5>
        <img className="emails-gif" src=".././emails.gif"/>
        </div>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text center-align">
          {' '}
          {' '}
          {reviewFields}
        </div>
      </div>
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green white-text btn-flat right"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
