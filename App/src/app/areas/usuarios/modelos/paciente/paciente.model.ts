import { CuidadorModel } from "../cuidador/cuidador.model";

export class PacienteModel{
    id: number;
    nome: string;
    idade: number;
    sexo: string;
    possuiFilho: boolean | string;
    estadoCivil: string;
    role: string ;
    possuiPlano:boolean | string;
    cuidador: CuidadorModel;
    idCuidador: number;
}