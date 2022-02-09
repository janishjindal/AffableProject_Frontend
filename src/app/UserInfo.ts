export class UserInfo {
    constructor(
      public id: number,
      public username: string,
      public biography: string,
      public mediaCount: number,
      public cityId: number,
      public latitude: number,
      public longitude: number,
      public zip: number,
      public contactPhoneNumber: number,
      public followerCount: number,
      public followingCount: number,
      public usertagsCount: number,
      public isBusiness: string,
      public externalUrl: string,
      public category: string,
      public geoMediaCount: number,
      public shoppablePostsCount: number,
      public followingTagCount: number,  
      public picture: string,
      public imageLabels: string,
      public hasEmail: string
    ) { 

     }    
  }

  export class PredictionInfo{
    constructor(
      public isBrand?: string,      
      public username?: string
    ) { 
      
     }
  }



