using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AlzheimerApp.Migrations
{
    public partial class AlteracaoTabelas : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Agendamentos_Pacientes_PacienteId",
                table: "Agendamentos");

            migrationBuilder.DropForeignKey(
                name: "FK_Atividades_Pacientes_PacienteId",
                table: "Atividades");

            migrationBuilder.DropForeignKey(
                name: "FK_Consultas_Agendamentos_AgendamentoId",
                table: "Consultas");

            migrationBuilder.DropForeignKey(
                name: "FK_Medicamentos_Pacientes_PacienteId",
                table: "Medicamentos");

            migrationBuilder.DropForeignKey(
                name: "FK_Pacientes_Cuidadores_CuidadorId",
                table: "Pacientes");

            migrationBuilder.DropForeignKey(
                name: "FK_Sintomas_Pacientes_PacienteId",
                table: "Sintomas");

            migrationBuilder.DropIndex(
                name: "IX_Sintomas_PacienteId",
                table: "Sintomas");

            migrationBuilder.DropIndex(
                name: "IX_Medicamentos_PacienteId",
                table: "Medicamentos");

            migrationBuilder.DropIndex(
                name: "IX_Consultas_AgendamentoId",
                table: "Consultas");

            migrationBuilder.DropIndex(
                name: "IX_Atividades_PacienteId",
                table: "Atividades");

            migrationBuilder.DropIndex(
                name: "IX_Agendamentos_PacienteId",
                table: "Agendamentos");

            migrationBuilder.DropColumn(
                name: "PacienteId",
                table: "Sintomas");

            migrationBuilder.DropColumn(
                name: "PacienteId",
                table: "Medicamentos");

            migrationBuilder.DropColumn(
                name: "AgendamentoId",
                table: "Consultas");

            migrationBuilder.DropColumn(
                name: "PacienteId",
                table: "Atividades");

            migrationBuilder.DropColumn(
                name: "PacienteId",
                table: "Agendamentos");

            migrationBuilder.RenameColumn(
                name: "CuidadorId",
                table: "Pacientes",
                newName: "IdCuidador");

            migrationBuilder.RenameIndex(
                name: "IX_Pacientes_CuidadorId",
                table: "Pacientes",
                newName: "IX_Pacientes_IdCuidador");

            migrationBuilder.AddColumn<int>(
                name: "IdPaciente",
                table: "Sintomas",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IdPaciente",
                table: "Medicamentos",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IdAgendamento",
                table: "Consultas",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IdPaciente",
                table: "Atividades",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IdPaciente",
                table: "Agendamentos",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Sintomas_IdPaciente",
                table: "Sintomas",
                column: "IdPaciente");

            migrationBuilder.CreateIndex(
                name: "IX_Medicamentos_IdPaciente",
                table: "Medicamentos",
                column: "IdPaciente");

            migrationBuilder.CreateIndex(
                name: "IX_Consultas_IdAgendamento",
                table: "Consultas",
                column: "IdAgendamento");

            migrationBuilder.CreateIndex(
                name: "IX_Atividades_IdPaciente",
                table: "Atividades",
                column: "IdPaciente");

            migrationBuilder.CreateIndex(
                name: "IX_Agendamentos_IdPaciente",
                table: "Agendamentos",
                column: "IdPaciente");

            migrationBuilder.AddForeignKey(
                name: "FK_Agendamentos_Pacientes_IdPaciente",
                table: "Agendamentos",
                column: "IdPaciente",
                principalTable: "Pacientes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Atividades_Pacientes_IdPaciente",
                table: "Atividades",
                column: "IdPaciente",
                principalTable: "Pacientes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Consultas_Agendamentos_IdAgendamento",
                table: "Consultas",
                column: "IdAgendamento",
                principalTable: "Agendamentos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Medicamentos_Pacientes_IdPaciente",
                table: "Medicamentos",
                column: "IdPaciente",
                principalTable: "Pacientes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Pacientes_Cuidadores_IdCuidador",
                table: "Pacientes",
                column: "IdCuidador",
                principalTable: "Cuidadores",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Sintomas_Pacientes_IdPaciente",
                table: "Sintomas",
                column: "IdPaciente",
                principalTable: "Pacientes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Agendamentos_Pacientes_IdPaciente",
                table: "Agendamentos");

            migrationBuilder.DropForeignKey(
                name: "FK_Atividades_Pacientes_IdPaciente",
                table: "Atividades");

            migrationBuilder.DropForeignKey(
                name: "FK_Consultas_Agendamentos_IdAgendamento",
                table: "Consultas");

            migrationBuilder.DropForeignKey(
                name: "FK_Medicamentos_Pacientes_IdPaciente",
                table: "Medicamentos");

            migrationBuilder.DropForeignKey(
                name: "FK_Pacientes_Cuidadores_IdCuidador",
                table: "Pacientes");

            migrationBuilder.DropForeignKey(
                name: "FK_Sintomas_Pacientes_IdPaciente",
                table: "Sintomas");

            migrationBuilder.DropIndex(
                name: "IX_Sintomas_IdPaciente",
                table: "Sintomas");

            migrationBuilder.DropIndex(
                name: "IX_Medicamentos_IdPaciente",
                table: "Medicamentos");

            migrationBuilder.DropIndex(
                name: "IX_Consultas_IdAgendamento",
                table: "Consultas");

            migrationBuilder.DropIndex(
                name: "IX_Atividades_IdPaciente",
                table: "Atividades");

            migrationBuilder.DropIndex(
                name: "IX_Agendamentos_IdPaciente",
                table: "Agendamentos");

            migrationBuilder.DropColumn(
                name: "IdPaciente",
                table: "Sintomas");

            migrationBuilder.DropColumn(
                name: "IdPaciente",
                table: "Medicamentos");

            migrationBuilder.DropColumn(
                name: "IdAgendamento",
                table: "Consultas");

            migrationBuilder.DropColumn(
                name: "IdPaciente",
                table: "Atividades");

            migrationBuilder.DropColumn(
                name: "IdPaciente",
                table: "Agendamentos");

            migrationBuilder.RenameColumn(
                name: "IdCuidador",
                table: "Pacientes",
                newName: "CuidadorId");

            migrationBuilder.RenameIndex(
                name: "IX_Pacientes_IdCuidador",
                table: "Pacientes",
                newName: "IX_Pacientes_CuidadorId");

            migrationBuilder.AddColumn<int>(
                name: "PacienteId",
                table: "Sintomas",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PacienteId",
                table: "Medicamentos",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "AgendamentoId",
                table: "Consultas",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PacienteId",
                table: "Atividades",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PacienteId",
                table: "Agendamentos",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sintomas_PacienteId",
                table: "Sintomas",
                column: "PacienteId");

            migrationBuilder.CreateIndex(
                name: "IX_Medicamentos_PacienteId",
                table: "Medicamentos",
                column: "PacienteId");

            migrationBuilder.CreateIndex(
                name: "IX_Consultas_AgendamentoId",
                table: "Consultas",
                column: "AgendamentoId");

            migrationBuilder.CreateIndex(
                name: "IX_Atividades_PacienteId",
                table: "Atividades",
                column: "PacienteId");

            migrationBuilder.CreateIndex(
                name: "IX_Agendamentos_PacienteId",
                table: "Agendamentos",
                column: "PacienteId");

            migrationBuilder.AddForeignKey(
                name: "FK_Agendamentos_Pacientes_PacienteId",
                table: "Agendamentos",
                column: "PacienteId",
                principalTable: "Pacientes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Atividades_Pacientes_PacienteId",
                table: "Atividades",
                column: "PacienteId",
                principalTable: "Pacientes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Consultas_Agendamentos_AgendamentoId",
                table: "Consultas",
                column: "AgendamentoId",
                principalTable: "Agendamentos",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Medicamentos_Pacientes_PacienteId",
                table: "Medicamentos",
                column: "PacienteId",
                principalTable: "Pacientes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Pacientes_Cuidadores_CuidadorId",
                table: "Pacientes",
                column: "CuidadorId",
                principalTable: "Cuidadores",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Sintomas_Pacientes_PacienteId",
                table: "Sintomas",
                column: "PacienteId",
                principalTable: "Pacientes",
                principalColumn: "Id");
        }
    }
}
