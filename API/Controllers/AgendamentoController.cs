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
        public ActionResult<Agendamento> ObterPorAgendamentoPorData(AgendamentoFiltro model) {
        
            if(model.DataAgendamentoInicial != null && model.DataAgendamentoFinal != null) {
                var objetos = _repositorio.Get().Where(x => x.DataAgendamento >= model.DataAgendamentoInicial && x.DataAgendamento <= model.DataAgendamentoFinal);
                if (objetos == null)
                    return NotFound();
                else {
                    return Ok(objetos);
                }

            }
            if (model.DataAgendamentoInicial != null && model.DataAgendamentoFinal == null) {
               var objetos = _repositorio.Get().Where(x => x.DataAgendamento >= model.DataAgendamentoInicial);
                if (objetos == null)
                    return NotFound();
                else {
                    return Ok(objetos);
                }
            }
            if (model.DataAgendamentoInicial == null && model.DataAgendamentoFinal != null) {
                var objetos = _repositorio.Get().Where(x => x.DataAgendamento <= model.DataAgendamentoFinal);
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