import axios from 'axios'
const USER_ID = '17841404292152981';


export default class InstagramService
{
    static GetPostsIds()
    {
        return axios.get(
            `https://graph.instagram.com/${USER_ID}/media?`,
            {
              params: {
                access_token:
                  "IGQVJYX3ZAidVhHWTNkajY0VVJJcGt3Q3EzWkktM2NlV3h4eHU5TmpUeGE4ajc0UHBkU3NNVDFrM1RkakJqTGFWcW92X1BBVDJibU13VDJTV1pZARGNiMDR5ZAUlkeHRvZAnppZAUJmVG9B",
                fields: "id, timestamp",
              },
            }
          ).then(x => x.data);
        
    }
    
    static GetPhoto(postId)
    {
        return axios.get(
            `https://graph.instagram.com/${postId}?`,
            {
              params: {
                access_token:
                  "IGQVJYX3ZAidVhHWTNkajY0VVJJcGt3Q3EzWkktM2NlV3h4eHU5TmpUeGE4ajc0UHBkU3NNVDFrM1RkakJqTGFWcW92X1BBVDJibU13VDJTV1pZARGNiMDR5ZAUlkeHRvZAnppZAUJmVG9B",
                fields: "media_url, media_type, permalink",
              },
            }
          ).then(x => x.data);
    }
}
