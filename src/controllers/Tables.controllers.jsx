import { ROL_Z, ROL_x, ROL_y, URLAPI } from "../config";

const asignamentRol = async (admin,options,optionsadmin,optionsemployee,setRols,setMostarOptionsAddRol,getEmployee) => {
    try {
      const res = await fetch(`${URLAPI}api/admin`);
      const result = await res.json();
      const arrayid = result.map((datas) => datas.id);
      let proccess
      arrayid.filter((id) => admin.id != id ? proccess=true:proccess=false)
   
 if (proccess) {
        if (admin.rol === "admin")
          await fetch(`${URLAPI}api/admin`, optionsadmin);
        await fetch(`${URLAPI}api/admin/${admin.id}`, optionsemployee);
        setRols(false);
        setMostarOptionsAddRol(false);
        getEmployee();
      } else{
        await fetch(`${URLAPI}api/admin/${admin.id}`, optionsemployee);
        RemoveRol(options,admin.id)
        getEmployee();
        setMostarOptionsAddRol(false);
        setRols(false);
      }  
    } catch (error) {
      console.log(error);
    }
  };
  
  const RemoveRol = async (options,ids) => {
    await fetch(`${URLAPI}api/admin/${ids}`, options);
  };
  
  const getAdmin = async (params,setRoles) => {
    const res = await fetch(`${URLAPI}api/admin/${params.users}`);
    const result = await res.json();
    const rol = result[0].rol;
    setRoles(rol);
  };
  
  const delet = (id, index, data,roles,deletEmployee) => {
   const rol = data.rol;


   if (roles ===ROL_Z) {
     deletEmployee(id, index,ROL_y);
   } else {
     if (rol ===   ROL_x) {
       alert(
         "usted no puede eliminar a el usuario : " +
           data.name +
           " porque  tiene el rol de : " +
           rol
       );
     } else {
       deletEmployee(id, index, ROL_y);
     }
   }
 };

 const asignament = (datas, ROL,setRols,setAdmin) => {
   let admin;
   if (ROL === "admin") {
     admin = "true";
   } else if (ROL === "empleado") {
     admin = "false";
   }
   setAdmin({
     name: datas.name,
     password: "admin",
     admin: admin,
     rol: ROL,
     id: datas.id,
   });
   setRols(true);
 };
 

export {
  asignamentRol,
  getAdmin,
  delet,
  asignament
}