import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseModel } from '../../modelos/base/base.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoBaseService {
    baseURL = `${environment.mainUrlAPI}`;
  
    constructor(private http: HttpClient) { }
  
    inserirMedicamento(medicamento: BaseModel) {
      return this.http.post(`${this.baseURL}api/medicamento`, medicamento);
    }
    inserirAtividade(atividade: BaseModel) {
      return this.http.post(`${this.baseURL}api/atividade`, atividade);
    }
    inserirSintoma(sintoma: BaseModel) {
      return this.http.post(`${this.baseURL}api/sintoma`, sintoma);
    }
  
    buscarTodosMedicamentos(): Promise<Array<BaseModel>> {
      return this.http.get<BaseModel[]>(`${this.baseURL}api/medicamento`).toPromise();
    }
    buscarTodasAtividades(): Promise<Array<BaseModel>> {
      return this.http.get<BaseModel[]>(`${this.baseURL}api/atividade`).toPromise();
    }
    buscarTodaosSintomas(): Promise<Array<BaseModel>> {
      return this.http.get<BaseModel[]>(`${this.baseURL}api/sintoma`).toPromise();
    }

    excluirMedicamento(id:number){
      return this.http.delete(`${this.baseURL}api/medicamento/${id}`);
    }

    excluirSintoma(id:number){
      return this.http.delete(`${this.baseURL}api/sintoma/${id}`);
    }

    ExcluirAtividade(id:number){
      return this.http.delete(`${this.baseURL}api/atividade/${id}`);
    }
  }
