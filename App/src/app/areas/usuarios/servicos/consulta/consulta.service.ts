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
}
