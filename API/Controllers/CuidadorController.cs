using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;


namespace AlzheimerApp.Controllers {
    [Route("api/cuidador")]
    [ApiController]
    public class CuidadorController : CrudBaseController<Cuidador, int> {
       // private readonly IRepositorioBase<Cuidador, int> _repositorio;

        protected CuidadorController(IRepositorioBase<Cuidador, int> repositorio): base(repositorio) {
           // _repositorio = repositorio;
        }
    }
}
