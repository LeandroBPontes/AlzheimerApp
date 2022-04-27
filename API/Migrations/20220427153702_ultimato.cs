using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AlzheimerApp.Migrations
{
    public partial class ultimato : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pacientes_Cuidadores_IdCuidador",
                table: "Pacientes");

            migrationBuilder.AlterColumn<int>(
                name: "IdCuidador",
                table: "Pacientes",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "IdPaciente",
                table: "Consultas",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Pacientes_Cuidadores_IdCuidador",
                table: "Pacientes",
                column: "IdCuidador",
                principalTable: "Cuidadores",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pacientes_Cuidadores_IdCuidador",
                table: "Pacientes");

            migrationBuilder.DropColumn(
                name: "IdPaciente",
                table: "Consultas");

            migrationBuilder.AlterColumn<int>(
                name: "IdCuidador",
                table: "Pacientes",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Pacientes_Cuidadores_IdCuidador",
                table: "Pacientes",
                column: "IdCuidador",
                principalTable: "Cuidadores",
                principalColumn: "Id");
        }
    }
}
