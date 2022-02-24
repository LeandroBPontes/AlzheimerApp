using AlzheimerApp.Dominios;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AlzheimerApp.Repositorios {
    public interface IRepositorioBase<T, TPrimary>  where T : PacienteCuidador
    {
        Task<List<T>> ObterTodosAsync();
        Task<T> ObterPorIdAsync(TPrimary Id);
        Task InserirAsync(T model);
        Task AtualizarAsync(T model);
        Task ExcluirAsync(T model);

    }
}
