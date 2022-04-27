using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace AlzheimerApp.Controllers {
   
    public abstract class CrudBaseController<TEntidade, TPrimary> : ControllerBase {

        private readonly IRepositorioBase<TEntidade, TPrimary> _repositorio;

        public CrudBaseController(IRepositorioBase<TEntidade, TPrimary> repositorio) {
            _repositorio = repositorio;
        }

        [HttpGet]
        public ActionResult<TEntidade> Get() {
            var users = _repositorio.Get();
            
            return Ok(users);
        }

        [HttpGet("{id}")]
        public ActionResult<TEntidade> ObterPorId(TPrimary id) {
            var objeto =  _repositorio.GetByID(id);

            if (objeto == null)
                return NotFound();
            else {
                return Ok(objeto);
            }
        }

        [HttpPost]
        public IActionResult Inserir([FromBody] TEntidade model) {
            if (!ModelState.IsValid)
                return BadRequest();

            _repositorio.Insert(model);
                return Ok();
            
        }

        [HttpPut("{id}")]
        public IActionResult Atualizar(TPrimary id, [FromBody] TEntidade model) {
            if (!ModelState.IsValid)
                return BadRequest();
            var objeto = _repositorio.GetByID(id);

            if (objeto == null)
                return NotFound();

           _repositorio.Update(model);
          
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Excluir(TPrimary id) {
            var objeto = _repositorio.GetByID(id);

            if (objeto == null)
                return NotFound();

            _repositorio.Delete(id);
            
            return NoContent();
        }

       
    }
}
