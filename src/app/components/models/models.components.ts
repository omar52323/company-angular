export  interface UserCreate {
    Id?:number ,
    username: string;
    password?: string;
    email: string;
    cellphone: string;
  }
  
  export  interface UserLogin{
    Username: string;
    Password: string;
  }