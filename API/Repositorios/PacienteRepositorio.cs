using AlzheimerApp.Banco;
using AlzheimerApp.Dominios;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using AlzheimerApp.Dominios.Pacientes;
using AutoMapper;

namespace AlzheimerApp.Repositorios {
    internal class PacienteRepositorio : IRepositorioBase<Paciente, int> {
        private readonly DataContext _context;

        public PacienteRepositorio(DataContext context) {
            _context = context;
        }
        public void Delete(int id) {
            var paciente = _context.Pacientes.Find(id);
            _context.Pacientes.Remove(paciente);
            _context.SaveChanges();
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
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Paciente, PacienteEntrada>());
            var mapper = new Mapper(config);

            var pacienteRetorno = mapper.Map<Paciente>(model);
            _context.Entry(pacienteRetorno).State = EntityState.Modified;
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
