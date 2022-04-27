using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AlzheimerApp.Migrations
{
    public partial class final : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdPaciente",
                table: "Consultas",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Consultas_IdPaciente",
                table: "Consultas",
                column: "IdPaciente");

            migrationBuilder.AddForeignKey(
                name: "FK_Consultas_Pacientes_IdPaciente",
                table: "Consultas",
                column: "IdPaciente",
                principalTable: "Pacientes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Consultas_Pacientes_IdPaciente",
                table: "Consultas");

            migrationBuilder.DropIndex(
                name: "IX_Consultas_IdPaciente",
                table: "Consultas");

            migrationBuilder.DropColumn(
                name: "IdPaciente",
                table: "Consultas");
        }
    }
}
