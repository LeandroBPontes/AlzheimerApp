
namespace AlzheimerApp.Dominios {
    public class Paciente : PacienteCuidador {
        public bool PossuiPlano { get; set; }
        public Cuidador Cuidador { get; set; }
        public int IdCuidador{ get; set; }
        public int IdMedicamento{ get; set; }
        public int IdAtividade{ get; set; }
        public int IdSintoma{ get; set; }

    }
}
