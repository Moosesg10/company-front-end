/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URL_API: "https://comapny-backend-production.up.railway.app/";
  VITE_ROL_Z: "owner";
  VITE_ROL_X: "admin";
  VITE_ROL_Y: "empleado";
  VITE_CONFIRM: true;
  VITE_NEGATIVE: false;

  // más variables de entorno...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
