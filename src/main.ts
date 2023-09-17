import { createRouter } from 'routerjs';

import './style.css';

import { CCategoria } from './mvc/controllers/CCategoria';
import { CProducto } from './mvc/controllers/CProducto';
import { PCategoria } from './capas/presentacion/PCategoria';
import { PProducto } from './capas/presentacion/PProducto';
import { CVenta } from './mvc/controllers/CVenta';

const root = document.querySelector('#app') as HTMLDivElement;

const mvcCategoria = new CCategoria();
const mvcProducto = new CProducto();
const mvcVenta = new CVenta();

const capaCategoria = new PCategoria();
const capaProducto = new PProducto();

let response!: HTMLElement;

createRouter()
  .get('/mvccategoria', () => {
    response = mvcCategoria.create();
    root.innerHTML = '';
    root.append(response);
  }).get('/mvcproducto', () => {
    response = mvcProducto.create();
    root.innerHTML = '';
    root.append(response);
  })
  .get('/mvcventa', () => {
    response = mvcVenta.create();
    root.innerHTML = '';
    root.append(response);
  })
  .get('/capacategoria', () => {
    response = capaCategoria.create();
    root.innerHTML = '';
    root.append(response);
  })
  .get('/capaproducto', () => {
    response = capaProducto.create();
    root.innerHTML = '';
    root.append(response);
  }).run();