using AlzheimerApp.Repositorios.Contratos;

namespace AlzheimerApp.Dominios {
    public class PacienteCuidador: IPossuiId{
        public int Id { get; set; }
        public string Nome { get; set; }
        public int Idade { get; set; }
        public string Sexo { get; set; }
        public bool PossuiFilho { get; set; }
        public string EstadoCivil { get; set; }
        
    }
}
