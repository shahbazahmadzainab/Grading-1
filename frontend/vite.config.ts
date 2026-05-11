import * as path from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const apiTarget = process.env.VITE_API_URL ?? "http://127.0.0.1:8000";

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
