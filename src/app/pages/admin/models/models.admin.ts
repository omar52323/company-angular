export  interface  Company {
    Name: string;
    Description: string;
    Direccion_Prinicipal: string;
    Nombre_Administrador: string;
    OwnerId: string;
    Id_GUID?: string;
  }
  
  export  interface  Brand {
    Id?:number,
    Nombre: string;
    Direccion: string;
    Status: number;
    Id_GUID?: string;
    TotalVentas?: number,
    StatusNombre?: string;
  }

  export interface Products {
    Id?:number,
    Name: string;
    Description: string;
    Price: number;
    Status: number;
    Id_GUID:string;
    StatusBrands?:Brand[]
  }

  export interface ProductByBrand{
    Id_Product:number,
    Id_Brand:number,
    Id_GUID:string,
    Status:number
  }
  