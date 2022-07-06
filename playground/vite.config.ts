import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
// @ts-ignore: the plugin should not be checked in the playground
import VueRouter from '../src/vite'
import Vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  clearScreen: false,
  plugins: [
    Vue({}),
    VueRouter({
      extensions: ['.md', '.vue'],
      logs: true,
      exclude: [
        'ignored',
      ],
    }),
    Inspect(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
