using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace AlzheimerApp.Controllers {
    [Route("api/agendamento")]
    [ApiController]
    public class AgendamentoController : CrudBaseController<Agendamento, int> {

        private readonly IRepositorioBase<Agendamento, int> _repositorio;
        public AgendamentoController(IRepositorioBase<Agendamento, int> repositorio) : base(repositorio) {
            _repositorio = repositorio;
        }
        [HttpPost("ObterAgendamentoPorData")]
        public ActionResult<Agendamento> ObterAgendamentoPorData(AgendamentoFiltro model) {

            if (model.DataAgendamentoInicial != null && model.DataAgendamentoFinal != null) {
                var objetos = _repositorio.Get()
                    .Where(x => x.DataAgendamento >= model.DataAgendamentoInicial
                    &&
                    x.DataAgendamento <= model.DataAgendamentoFinal
                    &&
                    x.IdPaciente == model.IdPaciente
                    );
                if (objetos == null)
                    return NotFound();
                else {
                    return Ok(objetos);
                }

            }
            if (model.DataAgendamentoInicial != null && model.DataAgendamentoFinal == null) {
                var objetos = _repositorio.Get()
                     .Where(x => x.DataAgendamento >= model.DataAgendamentoInicial
                     &&
                     x.IdPaciente == model.IdPaciente);
                if (objetos == null)
                    return NotFound();
                else {
                    return Ok(objetos);
                }
            }
            if (model.DataAgendamentoInicial == null && model.DataAgendamentoFinal != null) {
                var objetos = _repositorio.Get()
                    .Where(x => x.DataAgendamento <= model.DataAgendamentoFinal
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
        [HttpGet("paciente/{idPaciente}")]
        public ActionResult<Agendamento> ObterTodosAgendamentoPorIdPaciente(int? idPaciente) {

            if (idPaciente != null) {
                var objetos = _repositorio.Get()
                    .Where(x => x.IdPaciente == idPaciente
                    );
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