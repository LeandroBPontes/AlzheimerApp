using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;


namespace AlzheimerApp.Controllers {

    [Route("api/consulta")]
    [ApiController]
    public class ConsultaController : CrudBaseController<Consulta, int> {

        //private readonly IRepositorioBase<Consulta, int> _repositorio;
        public ConsultaController(IRepositorioBase<Consulta, int> repositorio) : base(repositorio) {
           // _repositorio = repositorio;
        }
      
    }
}