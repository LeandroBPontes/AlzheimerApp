using AlzheimerApp.Banco;
using AlzheimerApp.Dominios;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AlzheimerApp.Repositorios {
    internal class AgendamentoRepositorio : IRepositorioBase<Agendamento, int> {
        private readonly DataContext _context;

        public AgendamentoRepositorio(DataContext context) {
            _context = context;
        }

        public void Delete(int id) {
            var Agendamento = _context.Agendamentos.Find(id);
            _context.Agendamentos.Remove(Agendamento);
        }

        public IEnumerable<Agendamento> Get() {
            return _context.Agendamentos.ToList();
        }

        public Agendamento GetByID(int id) {
            return _context.Agendamentos.Find(id);
        }

        public void Insert(Agendamento model) {
            _context.Agendamentos.Add(model);
            _context.SaveChanges();
        }
        public void Update(Agendamento model) {
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