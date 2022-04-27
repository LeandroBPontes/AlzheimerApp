import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConsultaModel } from '../../modelos/consulta/consulta.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  baseURL = `${environment.mainUrlAPI}`;
  constructor(private http: HttpClient) { }

  inserir(consulta: ConsultaModel) {
    return this.http.post(`${this.baseURL}api/consulta`, consulta);
  }
  filtrarConsultaPorData(model: ConsultaModel){
    return this.http.post(`${this.baseURL}api/consulta/ObterConsultaPorData`, model);
  }
  excluirConsulta(id:number){
    return this.http.delete(`${this.baseURL}api/consulta/ExcluirConsultaPorIdAgendamento/${id}`);
  }
  excluir(id:number){
    return this.http.delete(`${this.baseURL}api/consulta/${id}`);
  }
  atualizar(id:number, consulta: ConsultaModel) {
    return this.http.put(`${this.baseURL}api/consulta/${id}`, consulta);
  }

  buscarPorId(id: number){
    return this.http.get<ConsultaModel>(`${this.baseURL}api/consulta/${id}`);
  }
  buscarPorIdPaciente(idPaciente: number){
    return this.http.get<ConsultaModel>(`${this.baseURL}api/consulta/paciente/${idPaciente}`);
  }
  excluirConsultaPorIdPaciente(id:number){
    return this.http.delete(`${this.baseURL}api/consulta/ExcluirPorIdPaciente/${id}`);
  }
  
}
