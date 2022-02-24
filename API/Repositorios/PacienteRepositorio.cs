using AlzheimerApp.Dominios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlzheimerApp.Repositorios {
    internal class PacienteRepositorio : IPacienteRepositorio {
        public Task AtualizarAsync(Paciente model) {
            throw new NotImplementedException();
        }

        public Task ExcluirAsync(Paciente model) {
            throw new NotImplementedException();
        }

        public Task InserirAsync(Paciente model) {
            throw new NotImplementedException();
        }

        public Task<Paciente> ObterPorIdAsync(int Id) {
            throw new NotImplementedException();
        }

        public Task<List<Paciente>> ObterTodosAsync() {
            throw new NotImplementedException();
        }
    }
}
