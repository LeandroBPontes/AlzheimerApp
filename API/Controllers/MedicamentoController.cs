using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Mvc;

namespace AlzheimerApp.Controllers {
    [Route("api/medicamento")]
    [ApiController]
    public class MedicamentoController : CrudBaseController<Medicamento, int> {
     

        public MedicamentoController(IRepositorioBase<Medicamento, int> repositorio) : base(repositorio) {
       
        }
    }
}