using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;

namespace AlzheimerApp.Controllers {
    [Route("api/atividade")]
    [ApiController]
    public class AtividadeController : CrudBaseController<Atividade, int> {
        // private readonly IRepositorioBase<Cuidador, int> _repositorio;

        public AtividadeController(IRepositorioBase<Atividade, int> repositorio) : base(repositorio) {
            // _repositorio = repositorio;
        }
    }
}