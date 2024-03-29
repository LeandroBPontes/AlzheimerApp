﻿using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace AlzheimerApp.Controllers {

    [Route("api/consulta")]
    [ApiController]
    public class ConsultaController : CrudBaseController<Consulta, int> {

        private readonly IRepositorioBase<Consulta, int> _repositorio;
        private readonly IRepositorioBase<Agendamento, int> _repositorioAgendamento;
        public ConsultaController(IRepositorioBase<Consulta, int> repositorio, IRepositorioBase<Agendamento, int> repositorioAgendamento) : base(repositorio) {
           _repositorio = repositorio;
           _repositorioAgendamento = repositorioAgendamento;
        }
        [HttpPost("ObterConsultaPorData")]
        public ActionResult<Consulta> ObterConsultaPorData(ConsultaFiltro model) {

            if (model.DataConsultaInicial != null && model.DataConsultaFinal != null) {
                var agendamento = _repositorioAgendamento.Get()
                     .Where(y => y.IdPaciente == model.IdPaciente);

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

        [HttpDelete("ExcluirConsultaPorIdAgendamento/{id}")]
        public IActionResult ExcluirPorIdAgendamento(int id) {
            var objeto = _repositorio.Get().Where(x=>x.IdAgendamento == id);

            foreach(var obj in objeto) {
                if (obj == null) 
                    return NotFound();
              
                _repositorio.Delete(obj.Id);
            }
            return NoContent();
        }

        [HttpGet("paciente/{idPaciente}")]
        public ActionResult<Consulta> ObterTodasConsultasPorIdPaciente(int? idPaciente) {

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