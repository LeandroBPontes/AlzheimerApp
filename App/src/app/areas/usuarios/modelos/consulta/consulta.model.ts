import { AgendamentoModel } from "../agendamento/agendamento.model";
import { CuidadorModel } from "../cuidador/cuidador.model";
import { PacienteModel } from "../paciente/paciente.model";

export class ConsultaModel{
    id: number;
    resumo: string;
    idAgendamento: number;
    agendamento: AgendamentoModel[];
    dataConsulta: Date | string
    dataConsultaInicial: Date | string
    dataConsultaFinal: Date | string
}