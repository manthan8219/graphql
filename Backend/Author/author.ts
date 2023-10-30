import { logger } from '../../Graphql/constants'
import Author from './Schema/schema'
export class AuthorService {


     createAuthor = async(input:any) => {
      try{
        logger.info("Entering inside create Author with parameters",{input})
        const response = await Author.create();
        return response;
      }catch(err:unknown){
        const error = err as Error;
        return error;
      }
    }
     
}