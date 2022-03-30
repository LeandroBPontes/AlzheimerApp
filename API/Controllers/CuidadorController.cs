using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;


namespace AlzheimerApp.Controllers {
    [Route("api/cuidador")]
    [ApiController]
    public class CuidadorController : CrudBaseController<Cuidador, int> {
   
        public CuidadorController(IRepositorioBase<Cuidador, int> repositorio): base(repositorio) {
          
        }
    }
}
