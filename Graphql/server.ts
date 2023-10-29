import { logger } from "./constants";
    import { ApolloServer } from "@apollo/server";
import {} from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone';

export class Server{

   async startServer(typeDefs:any,resolvers:any){
        try{
            const server = new ApolloServer({
                typeDefs,
                resolvers,
              });
              const { url } = await startStandaloneServer(server, {
                listen: { port: 4000 },
              });
            logger.info(`🚀  Server ready at: ${url}`);
        }
        catch(err:unknown){
            const error = err as Error;
            throw error;

        }
    }
}