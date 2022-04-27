using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AlzheimerApp.Migrations
{
    public partial class mudancas2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IdPaciente",
                table: "Consultas");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdPaciente",
                table: "Consultas",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
