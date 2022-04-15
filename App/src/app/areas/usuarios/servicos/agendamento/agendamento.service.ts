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
  filtrarAgendamentoPorData(dataInicial: any, dataFinal: any): Promise<Array<AgendamentoModel>> {
    console.log(`${this.baseURL}api/agendamento/ObterAgendamentoPorData/${dataInicial}/${dataFinal}`)
    return this.http.get<AgendamentoModel[]>(`${this.baseURL}api/agendamento/ObterAgendamentoPorData/${dataInicial}/${dataFinal}`).toPromise();
  }

}
