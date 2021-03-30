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
                  "IGQVJVeWRnUUVXdWlrb0JJbXJ3aXhxVDNpYTBqQVVyaXduMDgtS2J4NlBxdmtYMXRDdUFVVUVHYXZAEY2JrNFdkNDlqc1J4c1RoajVNNVYxTDJncEo5NlNJUVRId0psZAlhQbWpIak1R",
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
                  "IGQVJVeWRnUUVXdWlrb0JJbXJ3aXhxVDNpYTBqQVVyaXduMDgtS2J4NlBxdmtYMXRDdUFVVUVHYXZAEY2JrNFdkNDlqc1J4c1RoajVNNVYxTDJncEo5NlNJUVRId0psZAlhQbWpIak1R",
                fields: "media_url, media_type, permalink",
              },
            }
          ).then(x => x.data);
    }
}
