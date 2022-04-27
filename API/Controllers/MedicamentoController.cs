using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace AlzheimerApp.Controllers {
    [Route("api/medicamento")]
    [ApiController]
    public class MedicamentoController : CrudBaseController<Medicamento, int> {
     
        private readonly IRepositorioBase<Medicamento, int> _repositorio;
        public MedicamentoController(IRepositorioBase<Medicamento, int> repositorio) : base(repositorio) {
            _repositorio = repositorio;
        }
        [HttpGet("obterMedicamentoPorIdPaciente/{id}")]
        public ActionResult<Medicamento> ObterPorIdPaciente(int id) {

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