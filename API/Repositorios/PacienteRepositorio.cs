using AlzheimerApp.Banco;
using AlzheimerApp.Dominios;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace AlzheimerApp.Repositorios {
    internal class PacienteRepositorio : IRepositorioBase<Paciente, int> {
        private readonly DataContext _context;

        public PacienteRepositorio(DataContext context) {
            _context = context;
        }
        public void Delete(int id) {
            var paciente = _context.Pacientes.Find(id);
            _context.Pacientes.Remove(paciente);
        }

        public IEnumerable<Paciente> Get() {
            return _context.Pacientes.ToList();
        }

        public Paciente GetByID(int id) {
            return _context.Pacientes.Find(id);
        }

        public void Insert(Paciente model) {
            _context.Pacientes.Add(model);
            _context.SaveChanges();
        }
        public void Update(Paciente model) {
            _context.Entry(model).State = EntityState.Modified;
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
