import DevelopersQuery from './graphql/DevelopersQuery.graphql';
import client from './config';

class Developers {
    static async getDevelopers() {
        try {
            const response = await client.query({
                query: DevelopersQuery,
            });

            console.log('Before parsing: ', response);
            return Developers.parseResponse(response);
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    static parseResponse(response) {
        return response.data.allDevelopers;
    }
}

export default Developers;
