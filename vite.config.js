import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_URL_API ':process.env.VITE_URL_API ,
    'process.env.VITE_ROL_X ':process.env.VITE_ROL_X ,
    'process.env.VITE_ROL_Y ':process.env.VITE_ROL_Y ,
    'process.env.VITE_ROL_Z  ':process.env.VITE_ROL_Z ,
    'process.env.VITE_CONFIRM ':process.env.VITE_CONFIRM ,
    'process.env.VITE_NEGATIVE ':process.env.VITE_NEGATIVE ,
  }
}) 
