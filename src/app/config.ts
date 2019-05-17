export class Config {
  isFun: boolean;
  wordApiKey: string;
  flickrApiKey: string;
  flickrSecret: string;
  flickrGalleryId: string;
  flowerShow: flowerShow;
}

export interface flowerShow {
  link: string;
  date: string;
}
