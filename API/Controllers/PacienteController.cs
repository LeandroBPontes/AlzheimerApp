using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;

namespace AlzheimerApp.Controllers {
    [Route("api/paciente")]
    [ApiController]
    public class PacienteController : CrudBaseController<Paciente, int> {
        //private readonly IRepositorioBase<Paciente, int> _repositorio;

        protected PacienteController(IRepositorioBase<Paciente, int> repositorio) : base(repositorio) {
            //_repositorio = repositorio;
        }
    }
}