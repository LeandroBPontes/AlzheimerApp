import { CuidadorModel } from "../cuidador/cuidador.model";

export class PacienteModel{
    nome: string;
    idade: number;
    sexo: string;
    possuiFilho: boolean | string;
    estadoCivil: string;
    role: string ;
    possuiOcupacao:boolean | string;
    cuidador: CuidadorModel;
    idCuidador: number;
}