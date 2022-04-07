import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
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
  login(cuidador: CuidadorModel) {
    return this.http.post(`${this.baseURL}api/cuidador/login`, cuidador);
  }
  // buscarTodos(): Promise<Array<PacienteModel>> {
  //   return this.http.get<PacienteModel[]>(`${this.baseURL}api/paciente`).toPromise();
  // }

 
  buscarPorId(id: number){
    return this.http.get<CuidadorModel>(`${this.baseURL}api/cuidador/${id}`);
  }

  obterPacientePorId(id: number){
    return this.http.get<PacienteModel>(`${this.baseURL}api/paciente/obterPacientePorIdCuidador/${id}`);
  }
 
  // inserirPaciente(paciente: PacienteModel) {
  //   return this.http.post(`${this.baseURL}api/paciente`, paciente);
  // }
}
