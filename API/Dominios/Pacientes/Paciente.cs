
using System.ComponentModel.DataAnnotations.Schema;

namespace AlzheimerApp.Dominios {
    public class Paciente : PacienteCuidador {
        public bool PossuiPlano { get; set; }

        [ForeignKey("IdCuidador")]
        public virtual Cuidador Cuidador { get; set; }
        public int? IdCuidador { get; set; }

    }
}
