import * as yup from 'yup';

const addVoteSchema = yup.object().shape({
  count: yup
    .number('')
    .required('Please enter the total votes gained by the party above')
    .positive('Only positive numbers accepted')
    .typeError('Only numbers are allowed'),
});
export default addVoteSchema;
