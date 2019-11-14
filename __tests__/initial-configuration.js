import fetch from 'jest-fetch-mock';
import 'jest-localstorage-mock';

global.fetch = fetch;
global.error = new Error('Ops, Something Went Wrong');
