using AlzheimerApp.Repositorios.Contratos;

namespace AlzheimerApp.Dominios {
    public class Consulta : IPossuiId {
        public int Id { get; set; }
        public string Resumo{ get; set; }
        public Agendamento Agendamento { get; set; }
        public int IdAgendamento { get; set; }

    }
}
