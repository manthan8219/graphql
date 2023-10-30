import { logger } from "./Graphql/constants";
    import { ApolloServer } from "@apollo/server";
import {} from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from "mongoose";
import express from 'express';

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

    async connectDatabase(url:string){
        try{
           await mongoose.connect(url)
            logger.info(`🚀 Mongo Db is connected`);
        }
        catch(err:unknown){
            const error = err as Error;
            throw error;

        }
    }

    async startBackEndServer(){
        try{
            const app = express();

app.use(express.json());
app.use();

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
             logger.info(`🚀 backend server is up`);
         }
         catch(err:unknown){
             const error = err as Error;
             throw error;
 
         }
    }
}