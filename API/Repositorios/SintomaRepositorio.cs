using AlzheimerApp.Banco;
using AlzheimerApp.Dominios;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;


namespace AlzheimerApp.Repositorios {
    internal class SintomaRepositorio : IRepositorioBase<Sintoma, int> {
        private readonly DataContext _context;

        public SintomaRepositorio(DataContext context) {
            _context = context;
        }
        public void Delete(int id) {
            var Sintoma = _context.Sintomas.Find(id);
            _context.Sintomas.Remove(Sintoma);
            _context.SaveChanges();
        }

        public IEnumerable<Sintoma> Get() {
            return _context.Sintomas.ToList();
        }

        public Sintoma GetByID(int id) {
            return _context.Sintomas.Find(id);
        }

        public void Insert(Sintoma model) {
            _context.Sintomas.Add(model);
            _context.SaveChanges();
        }
        public void Update(Sintoma model) {
            var sintoma = _context.Sintomas.Find(model.Id);
            sintoma.Frequencia = model.Frequencia;
            sintoma.Horario = model.Horario;
            sintoma.Nome = model.Nome;

            _context.Entry(sintoma).State = EntityState.Modified;
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
