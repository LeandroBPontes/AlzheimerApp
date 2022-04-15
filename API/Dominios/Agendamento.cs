

using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace AlzheimerApp.Dominios {
    public class Agendamento{
        public int Id { get; set; }
        public DateTime DataAgendamento { get; set; }
        public string Especialidade { get; set; }
        public string Endereco { get; set; }

        [ForeignKey("IdPaciente")]
        public virtual Paciente Paciente { get; set; }
        public int IdPaciente { get; set; }
        public bool FeitoPeloPlano { get; set; }
       
    }
}
