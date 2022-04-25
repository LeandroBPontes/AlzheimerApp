using System;


namespace AlzheimerApp.Dominios {
    public class ConsultaFiltro {
     
        public string Resumo { get; set; }
        public DateTime? DataConsultaInicial { get; set; }
        public DateTime? DataConsultaFinal { get; set; }
        public int IdPaciente { get; set; }
    }
}
