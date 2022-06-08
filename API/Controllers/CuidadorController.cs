using AlzheimerApp.Dominios;
using AlzheimerApp.Repositorios;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace AlzheimerApp.Controllers {

    [Route("api/cuidador")]
    [ApiController]
    public class CuidadorController : CrudBaseController<Cuidador, int> {
        private readonly IRepositorioBase<Cuidador, int> _repositorio;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly IConfiguration _configuration;

        public CuidadorController(UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager, IConfiguration configuration,
            IRepositorioBase<Cuidador, int> repositorio) : base(repositorio) {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
            _repositorio = repositorio;
        }

        [HttpPost("inserir")]
        public IActionResult InserirCuidador([FromBody] Cuidador model) {
            if (!ModelState.IsValid)
                return BadRequest();

            _repositorio.Insert(model);
            return Ok(GeraToken(model));

        }


        [HttpPost("login")]
        public IActionResult login(Cuidador model) {
            if (!ModelState.IsValid)
                return BadRequest();

            var user = _repositorio.Get().Where(x => x.Nome == model.Nome && x.Senha == model.Senha);

            if(user.Count() == 0) {
                ModelState.AddModelError(string.Empty, "Login Inválido....");
                return BadRequest(ModelState);
            }
               
            return Ok(GeraToken(model));
        }


        private UsuarioToken GeraToken(Cuidador userInfo) {
            //define declarações do usuário
            var claims = new[]
            {
                 new Claim(JwtRegisteredClaimNames.UniqueName, userInfo.Nome),
                 new Claim("leandro", "leandroBarros"),
                 new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
             };

            //gera uma chave com base em um algoritmo simetrico
            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_configuration["Jwt:key"]));
            //gera a assinatura digital do token usando o algoritmo Hmac e a chave privada
            var credenciais = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            //Tempo de expiracão do token.
            var expiracao = _configuration["TokenConfiguration:ExpireHours"];
            var expiration = DateTime.UtcNow.AddHours(double.Parse(expiracao));

            // classe que representa um token JWT e gera o token
            JwtSecurityToken token = new JwtSecurityToken(
              issuer: _configuration["TokenConfiguration:Issuer"],
              audience: _configuration["TokenConfiguration:Audience"],
              claims: claims,
              expires: expiration,
              signingCredentials: credenciais);

            //retorna os dados com o token e informacoes
            return new UsuarioToken() {
                Authenticated = true,
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiration = expiration,
                Message = "Token JWT OK"
            };
        }
    }
}

