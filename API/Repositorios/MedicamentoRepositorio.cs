using AlzheimerApp.Banco;
using AlzheimerApp.Dominios;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;


namespace AlzheimerApp.Repositorios {
    internal class MedicamentoRepositorio : IRepositorioBase<Medicamento, int> {
        private readonly DataContext _context;

        public MedicamentoRepositorio(DataContext context) {
            _context = context;
        }
        public void Delete(int id) {
            var Medicamento = _context.Medicamentos.Find(id);
            _context.Medicamentos.Remove(Medicamento);
            _context.SaveChanges();
        }

        public IEnumerable<Medicamento> Get() {
            return _context.Medicamentos.ToList();
        }

        public Medicamento GetByID(int id) {
            return _context.Medicamentos.Find(id);
        }

        public void Insert(Medicamento model) {
            _context.Medicamentos.Add(model);
            _context.SaveChanges();
        }
        public void Update(Medicamento model) {
            _context.Entry(model).State = EntityState.Modified;
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