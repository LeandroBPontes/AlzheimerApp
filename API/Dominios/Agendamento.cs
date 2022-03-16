

namespace AlzheimerApp.Dominios {
    public class Agendamento{
        public int Id { get; set; }
        public string Especialidade { get; set; }
        public string Endereco { get; set; }
        public Paciente Paciente { get; set; }
        public int IdPaciente { get; set; }
        public bool FeitoPeloPlano { get; set; }
       
    }
}
