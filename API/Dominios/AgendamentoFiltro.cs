using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlzheimerApp.Dominios {
    public class AgendamentoFiltro {
        public DateTime DataAgendamentoInicial { get; set; }
        public DateTime DataAgendamentoFinal { get; set; }
        public string Especialidade { get; set; }
        public string Endereco { get; set; }
        public int IdPaciente { get; set; }
        public bool FeitoPeloPlano { get; set; }
    }
}
