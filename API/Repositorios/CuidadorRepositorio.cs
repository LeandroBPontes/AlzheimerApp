using AlzheimerApp.Banco;
using AlzheimerApp.Dominios;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace AlzheimerApp.Repositorios {
    public class CuidadorRepositorio : IRepositorioBase<Cuidador, int> {
        private readonly DataContext _context;

        public CuidadorRepositorio(DataContext context) {
            _context = context;
        }
        public void Delete(int id) {
            var cuidador  = _context.Cuidadores.Find(id);
           _context.Cuidadores.Remove(cuidador);
            _context.SaveChanges();

        }

        public IEnumerable<Cuidador> Get() {
            return _context.Cuidadores.ToList();
        }

        public Cuidador GetByID(int id) {
            return _context.Cuidadores.Find(id);
        }

        public void Insert(Cuidador model) {
            _context.Cuidadores.Add(model);
            _context.SaveChanges();
        }
        public void Update(Cuidador model) {
            var cuidador = _context.Cuidadores.Find(model.Id);
            //cuidador.Idade = model.Idade;
            //cuidador.Nome = model.Nome;
            cuidador.PossuiFilho = model.PossuiFilho;
            cuidador.PossuiOcupacao = model.PossuiOcupacao;
           

            //TODO - ALTERAR SENHA E LOGIN
           // cuidador.Senha = model.Senha;

            _context.Entry(cuidador).State = EntityState.Modified;
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
