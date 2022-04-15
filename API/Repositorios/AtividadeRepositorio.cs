using AlzheimerApp.Banco;
using AlzheimerApp.Dominios;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;


namespace AlzheimerApp.Repositorios {
    public class AtividadeRepositorio : IRepositorioBase<Atividade, int> {
        private readonly DataContext _context;

        public AtividadeRepositorio(DataContext context) {
            _context = context;
        }
        public void Delete(int id) {
            var Atividade = _context.Atividades.Find(id);
            _context.Atividades.Remove(Atividade);
            _context.SaveChanges();
        }

        public IEnumerable<Atividade> Get() {
            return _context.Atividades.ToList();
        }

        public Atividade GetByID(int id) {
            return _context.Atividades.Find(id);
        }

        public void Insert(Atividade model) {
            _context.Atividades.Add(model);
            _context.SaveChanges();
        }
        public void Update(Atividade model) {

            var atividade = _context.Atividades.Find(model.Id);
            atividade.Frequencia = model.Frequencia;
            atividade.Horario = model.Horario;
            atividade.Nome = model.Nome;

            _context.Entry(atividade).State = EntityState.Modified;
            _context.SaveChanges();

        }

        private bool disposed = false;
        protected virtual void Dispose(bool disposing) {
            if (!this.disposed) {
                if (disposing) {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }
        public void Dispose() {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
