using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AlzheimerApp.Migrations
{
    public partial class AlteracaoAlzheimerApp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IdPaciente",
                table: "Agendamentos");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdPaciente",
                table: "Agendamentos",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
