import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://172.16.100.58:4000',
});

export default client;
