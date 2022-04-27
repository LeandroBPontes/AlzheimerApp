using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace AlzheimerApp.Controllers {
    [Route("api/atividade")]
    [ApiController]
    public class AtividadeController : CrudBaseController<Atividade, int> {

        private readonly IRepositorioBase<Atividade, int> _repositorio;
        public AtividadeController(IRepositorioBase<Atividade, int> repositorio) : base(repositorio) {
            _repositorio = repositorio;
        }
        [HttpGet("obterAtividadePorIdPaciente/{id}")]
        public ActionResult<Atividade> ObterPorIdPaciente(int id) {

            var objeto = _repositorio.Get().Where(x => x.IdPaciente == id);

            if (objeto == null)
                return NotFound();
            else {
                return Ok(objeto);
            }
        }

        [HttpDelete("ExcluirPorIdPaciente/{id}")]
        public IActionResult ExcluirPorIdPaciente(int id) {
            var objeto = _repositorio.Get().Where(x => x.IdPaciente == id);

            foreach (var obj in objeto) {
                if (obj == null)
                    return NotFound();

                _repositorio.Delete(obj.Id);
            }
            return NoContent();
        }


    }
}