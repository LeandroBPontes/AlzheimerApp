import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CuidadorModel } from '../../modelos/cuidador/cuidador.model';
import { PacienteModel } from '../../modelos/paciente/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class CuidadorService {
  baseURL = `${environment.mainUrlAPI}`;

  constructor(private http: HttpClient) { }

  inserir(cuidador: CuidadorModel) {
    return this.http.post(`${this.baseURL}api/cuidador`, cuidador);
  }
  // inserirPaciente(paciente: PacienteModel) {
  //   return this.http.post(`${this.baseURL}api/paciente`, paciente);
  // }
}
