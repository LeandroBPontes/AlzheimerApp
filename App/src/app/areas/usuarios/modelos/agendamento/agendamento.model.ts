import { CuidadorModel } from "../cuidador/cuidador.model";
import { PacienteModel } from "../paciente/paciente.model";

export class AgendamentoModel{
    id: number;
    idPaciente: number;
    paciente: PacienteModel[];
    idCuidador: number;
    cuidador: CuidadorModel[];
    endereco: string;
    especialidade: string;
    feitoPeloPlano: boolean;
    dataAgendamento: Date | string
    dataAgendamentoInicial: Date | string
    dataAgendamentoFinal: Date | string
   
}