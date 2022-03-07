using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlzheimerApp.Dominios {
    public class Relatorio {
        Agendamento Agendamento {get; set;}
        Sintoma Sintoma { get; set; }
        Medicamento Medicamento { get; set; }
        Atividade Atividade { get; set; }
    }
}
