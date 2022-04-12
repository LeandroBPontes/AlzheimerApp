using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;

namespace AlzheimerApp.Controllers {
    [Route("api/atividade")]
    [ApiController]
    public class AtividadeController : CrudBaseController<Atividade, int> {
     

        public AtividadeController(IRepositorioBase<Atividade, int> repositorio) : base(repositorio) {
           
        }
    }
}