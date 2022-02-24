using AlzheimerApp.Compartilhado.Enum;

namespace AlzheimerApp.Dominios {
    public class Paciente : PacienteCuidador {
        public bool PossuiPlano { get; set; }
        public Cuidador Cuidador { get; set; }
        public int IdCuidador{ get; set; }
        public EnumRole Role { get; set; }

    }
}
