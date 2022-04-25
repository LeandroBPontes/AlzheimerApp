using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace AlzheimerApp.Controllers {

    [Route("api/consulta")]
    [ApiController]
    public class ConsultaController : CrudBaseController<Consulta, int> {

        private readonly IRepositorioBase<Consulta, int> _repositorio;
        public ConsultaController(IRepositorioBase<Consulta, int> repositorio) : base(repositorio) {
           _repositorio = repositorio;
        }
        [HttpPost("ObterConsultaPorData")]
        public ActionResult<Consulta> ObterConsultaPorData(ConsultaFiltro model) {

            if (model.DataConsultaInicial != null && model.DataConsultaFinal != null) {
                var objetos = _repositorio.Get()
                    .Where(x => x.DataConsulta >= model.DataConsultaInicial
                    &&
                    x.DataConsulta <= model.DataConsultaFinal
                    &&
                    x.IdPaciente == model.IdPaciente
                    );
                if (objetos == null)
                    return NotFound();
                else {
                    return Ok(objetos);
                }

            }
            if (model.DataConsultaInicial != null && model.DataConsultaFinal == null) {
                var objetos = _repositorio.Get()
                     .Where(x => x.DataConsulta >= model.DataConsultaInicial
                     &&
                      x.IdPaciente == model.IdPaciente);
                if (objetos == null)
                    return NotFound();
                else {
                    return Ok(objetos);
                }
            }
            if (model.DataConsultaInicial == null && model.DataConsultaFinal != null) {
                var objetos = _repositorio.Get()
                    .Where(x => x.DataConsulta <= model.DataConsultaFinal
                    &&
                     x.IdPaciente == model.IdPaciente);
                if (objetos == null)
                    return NotFound();
                else {
                    return Ok(objetos);
                }
            }
            return BadRequest("Nenhum objeto encontrado");
        }

    }
}