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
        [HttpGet("ObterPorAgendamentoPorData/{dataInicial}/{dataFinal}")]
        public ActionResult<Agendamento> ObterPorAgendamentoPorData(DateTime? dataInicial, DateTime? dataFinal) {
        
            if(dataInicial != null && dataFinal != null) {
                var objetos = _repositorio.Get().Where(x => x.DataAgendamento >= dataInicial && x.DataAgendamento <= dataFinal);
                if (objetos == null)
                    return NotFound();
                else {
                    return Ok(objetos);
                }

            }
            if (dataInicial != null && dataFinal == null) {
               var objetos = _repositorio.Get().Where(x => x.DataAgendamento >= dataInicial);
                if (objetos == null)
                    return NotFound();
                else {
                    return Ok(objetos);
                }
            }
            if (dataInicial == null && dataFinal != null) {
                var objetos = _repositorio.Get().Where(x => x.DataAgendamento <= dataFinal);
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