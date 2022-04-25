using AlzheimerApp.Banco;
using AlzheimerApp.Dominios;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;


namespace AlzheimerApp.Repositorios {
    public class ConsultaRepositorio : IRepositorioBase<Consulta, int> {
        private readonly DataContext _context;

        public ConsultaRepositorio(DataContext context) {
            _context = context;
        }
        public void Delete(int id) {
            var Consulta = _context.Consultas.Find(id);
            _context.Consultas.Remove(Consulta);
            _context.SaveChanges();

        }

        public IEnumerable<Consulta> Get() {
            return _context.Consultas.ToList();
        }

        public Consulta GetByID(int id) {
            return _context.Consultas.Find(id);
        }

        public void Insert(Consulta model) {
            _context.Consultas.Add(model);
            _context.SaveChanges();
        }
        public void Update(Consulta model) {
            var Consulta = _context.Consultas.Find(model.Id);
        
            Consulta.DataConsulta = model.DataConsulta;
            Consulta.Resumo = model.Resumo;
            _context.Entry(Consulta).State = EntityState.Modified;
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
