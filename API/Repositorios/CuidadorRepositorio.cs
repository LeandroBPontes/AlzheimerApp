using AlzheimerApp.Dominios;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AlzheimerApp.Repositorios {
    internal class CuidadorRepositorio : ICuidadorRepositorio {
        public Task AtualizarAsync(Cuidador model) {
            throw new System.NotImplementedException();
        }

        public Task ExcluirAsync(Cuidador model) {
            throw new System.NotImplementedException();
        }

        public Task InserirAsync(Cuidador model) {
            throw new System.NotImplementedException();
        }

        public Task<Cuidador> ObterPorIdAsync(int Id) {
            throw new System.NotImplementedException();
        }

        public Task<List<Cuidador>> ObterTodosAsync() {
            throw new System.NotImplementedException();
        }
    }
}
