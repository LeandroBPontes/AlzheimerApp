using AlzheimerApp.Dominios;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace AlzheimerApp.Banco {
    public class DataContext : IdentityDbContext 
        {

        public DataContext(DbContextOptions<DataContext> options) : base(options) {

        }
        public DataContext() {

        }

        public DbSet<Cuidador> Cuidadores { get; set; }
        public DbSet<Paciente> Pacientes { get; set; }
        public DbSet<Consulta> Consultas { get; set; }
        public DbSet<Agendamento> Agendamentos { get; set; }
        public DbSet<Atividade> Atividades { get; set; }
        public DbSet<Medicamento> Medicamentos { get; set; }
        public DbSet<Sintoma> Sintomas { get; set; }

      
    }
}