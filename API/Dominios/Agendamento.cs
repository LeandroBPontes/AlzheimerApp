using AlzheimerApp.Repositorios.Contratos;

namespace AlzheimerApp.Dominios {
    public class Agendamento : IPossuiId {
        public int Id { get; set; }
        public string Especialidade { get; set; }
        public string Endereco { get; set; }
        public Paciente Paciente { get; set; }
        public bool FeitoPeloPlano { get; set; }
       
    }
}
