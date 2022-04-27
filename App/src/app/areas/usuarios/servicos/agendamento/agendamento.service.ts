import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AgendamentoModel } from '../../modelos/agendamento/agendamento.model';

@Injectable({
  providedIn: 'root'
})

export class AgendamentoService {
  baseURL = `${environment.mainUrlAPI}`;
  constructor(private http: HttpClient) { }

  inserir(agendamento: AgendamentoModel) {
    return this.http.post(`${this.baseURL}api/agendamento`, agendamento);
  }
  filtrarAgendamentoPorData(model: AgendamentoModel){
    return this.http.post(`${this.baseURL}api/agendamento/ObterAgendamentoPorData`, model);
  }
  buscarPorId(id: number){
    return this.http.get<AgendamentoModel>(`${this.baseURL}api/agendamento/${id}`);
  }
  buscarPorIdPaciente(idPaciente: number){
    return this.http.get<AgendamentoModel>(`${this.baseURL}api/agendamento/paciente/${idPaciente}`);
  }
  excluirAgendamento(id:number){
    return this.http.delete(`${this.baseURL}api/agendamento/${id}`);
  }
  atualizar(id:number, agendamento: AgendamentoModel) {
    return this.http.put(`${this.baseURL}api/agendamento/${id}`, agendamento);
  }


}
