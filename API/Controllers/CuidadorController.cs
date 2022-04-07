using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace AlzheimerApp.Controllers {

    [Route("api/cuidador")]
    [ApiController]
    public class CuidadorController : CrudBaseController<Cuidador, int> {
        private readonly IRepositorioBase<Cuidador, int> _repositorio;
        public CuidadorController(IRepositorioBase<Cuidador, int> repositorio): base(repositorio) {
            _repositorio = repositorio;
        }

        [HttpPost("login")]
        public IActionResult login(Cuidador model) {
            if (!ModelState.IsValid)
                return BadRequest();

            var user = _repositorio.Get().Where(x => x.Nome == model.Nome && x.Senha == model.Senha);

            if(user.Count() == 0)
                return Ok(false);

            return Ok(user);

        }
    }
}
