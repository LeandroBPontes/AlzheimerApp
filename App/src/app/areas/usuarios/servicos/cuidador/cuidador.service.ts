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
 
  buscarPorId(id: number){
    return this.http.get<CuidadorModel>(`${this.baseURL}api/cuidador/${id}`);
  }

  obterPacientePorId(id: number){
    return this.http.get<PacienteModel>(`${this.baseURL}api/paciente/obterPacientePorIdCuidador/${id}`);
  }

  obterIdPacienteParaRota(id: number): any{
    return this.http.get<PacienteModel>(`${this.baseURL}api/paciente/obterPacientePorIdCuidador/${id}`);
  }

  excluir(id:number){
    return this.http.delete(`${this.baseURL}api/cuidador/${id}`);
  }
 
  atualizar(id:number, cuidador: CuidadorModel) {
    return this.http.put(`${this.baseURL}api/cuidador/${id}`, cuidador);
  }
}
