using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlzheimerApp.Dominios.Pacientes {
    public class PacienteEntrada {
        public int IdCuidador { get; set; }
        public string Nome { get; set; }
        public int Idade { get; set; }
        public string Sexo { get; set; }
        public bool PossuiFilho { get; set; }
        public string EstadoCivil { get; set; }
        public bool PossuiPlano { get; set; }
        public string Role { get; set; }
    }
}
