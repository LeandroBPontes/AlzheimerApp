using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;

namespace AlzheimerApp.Controllers {
    [Route("api/sintoma")]
    [ApiController]
    public class SintomaController : CrudBaseController<Sintoma, int> {
        // private readonly IRepositorioBase<Cuidador, int> _repositorio;

        public SintomaController(IRepositorioBase<Sintoma, int> repositorio) : base(repositorio) {
            // _repositorio = repositorio;
        }
    }
}