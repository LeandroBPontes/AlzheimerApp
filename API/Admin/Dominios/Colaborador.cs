using AlzheimerApp.Compartilhado.Enum;
using AlzheimerApp.Repositorios.Contratos;


namespace AlzheimerApp.Admin.Dominios {
    public class Colaborador : IPossuiId {
        public int Id { get; set; }
        public string Nome { get; set; }
        public EnumRole Role { get; set; }
    }
}
