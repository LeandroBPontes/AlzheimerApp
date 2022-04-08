import { PacienteModel } from "../paciente/paciente.model";

export class BaseModel{
    id: number;
    idPaciente: number;
    paciente: PacienteModel[];
    nome: string;
    horario: string;
    frequencia: string;
   
}