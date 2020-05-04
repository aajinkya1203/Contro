import axios from 'axios';
import cheerio from 'cheerio';

const Fetch=()=>{
    axios.get("http://google.com/news").then(urlResp=>{
    const $ = cheerio.load(urlResp.data);
    $('h3.ipQwMb.ekueJc.gEATFF.RD0gLb').each((i, element)=>{
        const list = $(element).data();
        console.log(list);
    })
    })
}
export default Fetch;
