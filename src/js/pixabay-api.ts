import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '49425225-4fab9228e9772b9206d5850f9',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

type Image = {
  webformatURL: string,
  largeImageURL: string,
  tags: string,
  likes: number,
  views: number,
  comments: number,
  downloads: number,
}

type ResponseData = { 
  hits:Image[];
  total:number;
  totalHits:number;
 }

async function fetchImages(
  query:string,
  page:number = 1,
  perPage:number = 15):Promise<ResponseData>
   {
  try {
    const response = await axios.get('', {
      params: {
        q: query,
        page: page,
        per_page: perPage,
      },
    });

    const { hits, total, totalHits } = response.data;
    console.log(response);

    return { hits, total, totalHits };
  } catch (err) {
      throw new Error("Something went wrong while fetching images...");
  }
}

export default fetchImages;
