

using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace AlzheimerApp.Dominios {
    public class Consulta{
        public int Id { get; set; }
        public string Resumo{ get; set; }
        public DateTime DataConsulta { get; set; }

        [ForeignKey("IdAgendamento")]
        public virtual Agendamento Agendamento { get; set; }
        public int IdAgendamento { get; set; }
        public int IdPaciente { get; set; }

    }
}
