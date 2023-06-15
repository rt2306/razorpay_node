import "dotenv/config"
import { Configuration, OpenAIApi } from "openai";
const {OPENAI_API_KEY,OPENAI_ORG} = process.env
const configuration = new Configuration({organization: OPENAI_ORG, apiKey: OPENAI_API_KEY});
  const openai = new OpenAIApi(configuration); 

  const create_image = async(req, res)=>{
    const { prompt } = req.body;
    try { 
      const response = await openai.createImage({prompt,n: 1,size: "512x512"});
      res.send(response.data.data[0].url);
    } catch (err) {
        console.log(err,"errerrerr");
      res.send(err.message);
    }
  }

  export default {
    create_image
}