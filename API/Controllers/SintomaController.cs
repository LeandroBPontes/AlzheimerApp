using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace AlzheimerApp.Controllers {
    [Route("api/sintoma")]
    [ApiController]
    public class SintomaController : CrudBaseController<Sintoma, int> {
         private readonly IRepositorioBase<Sintoma, int> _repositorio;

        public SintomaController(IRepositorioBase<Sintoma, int> repositorio) : base(repositorio) {
             _repositorio = repositorio;
        }
        [HttpGet("obterSintomaPorIdPaciente/{id}")]
        public ActionResult<Sintoma> ObterPorIdPaciente(int id) {

            var objeto = _repositorio.Get().Where(x => x.IdPaciente == id);

            if (objeto == null)
                return NotFound();
            else {
                return Ok(objeto);
            }
        }
    }
}