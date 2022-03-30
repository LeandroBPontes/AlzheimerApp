

using System.ComponentModel.DataAnnotations.Schema;

namespace AlzheimerApp.Dominios {
    public class Consulta{
        public int Id { get; set; }
        public string Resumo{ get; set; }

        [ForeignKey("IdAgendamento")]
        public virtual Agendamento Agendamento { get; set; }
        public int IdAgendamento { get; set; }

    }
}
