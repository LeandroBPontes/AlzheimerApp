using AlzheimerApp.Dominios;
using AlzheimerApp.Dominios.Pacientes;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace AlzheimerApp.Controllers {
    [Route("api/paciente")]
    [ApiController]
    public class PacienteController : CrudBaseController<Paciente, int> {
        private readonly IRepositorioBase<Paciente, int> _repositorio;

        public PacienteController(IRepositorioBase<Paciente, int> repositorio) : base(repositorio) {
            _repositorio = repositorio;
        }
        [HttpGet("obterPacientePorIdCuidador/{id}")]
        public ActionResult<Paciente> ObterPorIdCuidador(int id) {
         
            var objeto = _repositorio.Get().Where(x => x.IdCuidador == id);

            if (objeto == null)
                return NotFound();
            else {
                return Ok(objeto);
            }
        }
    }
}