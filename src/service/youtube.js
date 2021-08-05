//기존의 app.jsx에서 API를 사용해 네트워크 통신하는 부분은 여기로 따로 빼주기!
class Youtube{
  constructor(key){
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }


  async mostPopular(){
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items; 
  }

  async search(query){
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map(item => ({ ...item, id: item.id.videoId })); 
    //items배열을 map을 통해서 돌면서 배열안에 있는 각각의 아이템을 새로운 오브젝트! 로 변환해줌. ({}을 썼으므로..)
    //이때 새로운 object를 기존 아이템의 동일한 정보를 갖고 있으나 id만 새로운 값으로 덮어 씌워진다!
    //Q. 이과정을 왜하는가? 
    //A. 아래의 videoList를 받아오는 API에선 items.id에 하나의 문자열로 이루어진 id가 있었지만, 이번에는 items.id가 
    //  객체로 존재하므로 오류가 발생.. 하나의 문자열로 이루어진 Id를 넣어주기 위해서 이 과정을 진행!

  }
}

export default Youtube;