import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PacienteModel } from '../../modelos/paciente/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  baseURL = `${environment.mainUrlAPI}`;

  constructor(private http: HttpClient) { }

 
  inserir(paciente: PacienteModel) {
    return this.http.post(`${this.baseURL}api/paciente`, paciente);
  }

  atualizar(id:number, paciente: PacienteModel) {
    return this.http.put(`${this.baseURL}api/paciente/${id}`, paciente);
  }

  buscarTodos(): Promise<Array<PacienteModel>> {
    return this.http.get<PacienteModel[]>(`${this.baseURL}api/paciente`).toPromise();
  }
}

