using AlzheimerApp.Banco;
using AlzheimerApp.Dominios;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlzheimerApp.Repositorios {
    internal class RepositorioBase<T, TPrimary> : IRepositorioBase<T, TPrimary> where T : PacienteCuidador{

        private readonly DataContext _context;

        internal RepositorioBase(DataContext context) {
            _context = context;
        }

        public async Task AtualizarAsync(T model) {
            try {
                _context.Update(model);
                await _context.SaveChangesAsync();
            }
            catch (Exception e) {
                Console.WriteLine(e);
                throw;
            }
        }

        public async Task ExcluirAsync(T model) {
            _context.Remove(model);
            await _context.SaveChangesAsync();
        }

        public async Task InserirAsync(T model) {
            _context.Add(model);
            await _context.SaveChangesAsync();
        }

        public async Task<List<T>> ObterTodosAsync() {
            return await _context.Set<T>().ToListAsync();
        }

        public Task<T> ObterPorIdAsync(TPrimary id) {
            return _context.Set<T>().FirstOrDefaultAsync(x => x.Id.Equals(id));
        }
    }
}
