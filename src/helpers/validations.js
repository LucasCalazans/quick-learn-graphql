import { string, ref, boolean, object } from 'yup';

export default {
    string: msg => string().required(msg || 'Required Field'),
    password: msg =>
        string()
            .required(msg || 'Required Field')
            .min(6, 'You need at least 6 characters')
            .matches(/[a-z]/, 'Lowercase')
            .matches(/[A-Z]/, 'Uppercase'),
    email: msg =>
        string()
            .email()
            .required(msg || 'Required Field'),
};

export const mountValidation = obj => object().shape(obj);
