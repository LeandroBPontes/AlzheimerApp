using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;


namespace AlzheimerApp.Controllers {
    [Route("api/agendamento")]
    [ApiController]
    public class AgendamentoController : CrudBaseController<Agendamento, int> {
        public AgendamentoController(IRepositorioBase<Agendamento, int> repositorio) : base(repositorio) {
           
        }
    }
}