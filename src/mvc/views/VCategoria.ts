import { Categoria } from '../../interfaces/system';

export class VCategoria {
  private component: HTMLElement;

  public btnSave: HTMLButtonElement;
  public btnCreate: HTMLButtonElement;

  private inputId: HTMLInputElement;
  private inputNombre: HTMLInputElement;

  public outputTable: HTMLTableElement;
  private outputError: HTMLParagraphElement;

  constructor() {
    const $template = document.querySelector<HTMLTemplateElement>('#categoria');
    const $templateContent = $template?.content.querySelector<HTMLElement>('#container');
    this.component = $templateContent?.cloneNode(true) as HTMLElement;

    this.component.querySelector('h3')!.textContent = 'MVC Categoria';

    this.btnCreate = this.component.querySelector('#btnCreate') as HTMLButtonElement;
    this.btnSave = this.component.querySelector('#btnSave') as HTMLButtonElement;

    this.inputId = this.component.querySelector('#id') as HTMLInputElement;
    this.inputNombre = this.component.querySelector('#nombre') as HTMLInputElement;

    this.outputTable = this.component.querySelector('#table') as HTMLTableElement;
    this.outputError = this.component.querySelector('#errors') as HTMLParagraphElement;
  }

  getData(): Categoria {
    return {
      id: Number(this.inputId.value),
      nombre: this.inputNombre.value,
    }
  }

  setData(data: Categoria): void {
    this.inputId.value = String(data.id);
    this.inputNombre.value = data.nombre;
  }

  clearData(): void {
    this.inputId.value = '0';
    this.inputNombre.value = '';
  }

  setDataError(message: string): void {
    this.outputError.textContent = message;
  }

  setTable(rows: Categoria[]): void {
    let cells = ''

    rows.forEach(row => {
      cells += `<tr>
      <td>${row.nombre}</td>
      <td width="50px">
        <button data-id="${row.id}" data-type="view">🔎</button>
        <button data-id="${row.id}" data-type="delete">❌</button>
      </td>
      </tr>`
    });

    const tbody = this.outputTable.querySelector('tbody') as HTMLTableSectionElement;
    tbody.innerHTML = cells;
  }

  getHTML(): HTMLElement {
    return this.component;
  }
}