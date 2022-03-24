using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlzheimerApp.Dominios {
    //medicamento, atividade e sintoma possuem o id do paciente
    //logo poderemos em um unico paciente, ter varios destes
    public class Base {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Horario { get; set; }
        public string Frequencia { get; set; }
        public string IdPaciente { get; set; }
    }
}
