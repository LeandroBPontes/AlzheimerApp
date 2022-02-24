using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace AlzheimerApp.Controllers {
    public class PacienteCuidadorController<T, TPrimary> : ControllerBase 
        where T : PacienteCuidador, new() 
        {
        private readonly IRepositorioBase<T, TPrimary> _repositorio;
        public PacienteCuidadorController(IRepositorioBase<T, TPrimary> repositorio) {
            _repositorio = repositorio;
        }

        [HttpGet]
        public virtual async Task<IActionResult> ObterTodos() {
            var objetos = await _repositorio.ObterTodosAsync();

            //var retorno = _mapper.MapearPara<List<TViewModelSaida>>(objetos);

            return Ok(objetos);
        }

        [HttpGet("{id}")]
        public virtual async Task<IActionResult> ObterPorId(TPrimary id) {
            var objeto = await _repositorio.ObterPorIdAsync(id);

            if (objeto == null)
                return NotFound();

           // var retorno = _mapper.MapearPara<TViewModelSaida>(objeto);
            return Ok(objeto);
        }

        //[HttpPost]
        //public virtual Task<IActionResult> Inserir([FromBody] T model) {
        //    //if (!ModelState.IsValid)
        //    //    return BadRequest();

        //    //var objeto = _mapper.MapearPara<TEntidade>(model);

        //    var resultado =  _repositorio.InserirAsync(model);
        //    //if (!resultado.Sucesso)
        //    //    return BadRequest(resultado.Erros);

        //    //var retorno = _mapper.MapearPara<TViewModelSaida>(objeto);

        //    //return CreatedAtAction("ObterPorId", new { id = retorno.Id }, retorno);
        //    return resultado;
        //}

        [HttpPut("{id}")]
        public virtual async Task<IActionResult> Atualizar(TPrimary id, [FromBody] T model) {
            if (!ModelState.IsValid)
                return BadRequest();

            var objeto = await _repositorio.ObterPorIdAsync(id);

            if (objeto == null)
                return NotFound();

           // _mapper.MapearPara(model, objeto);

            var resultado =  _repositorio.AtualizarAsync(model);
            //if (!resultado.Sucesso)
            //    return BadRequest(resultado.Erros);

            return Ok(resultado);
        }

        [HttpDelete("{id}")]
        public virtual async Task<IActionResult> Excluir(TPrimary id, T model) {
            var objeto = await _repositorio.ObterPorIdAsync(id);

            if (objeto == null)
                return NotFound();

            var resultado = _repositorio.ExcluirAsync(model);
            //if (!resultado.Sucesso)
            //    return BadRequest(resultado.Erros);

            return Ok(resultado);
        }
    }
}

