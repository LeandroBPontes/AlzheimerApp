﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace AlzheimerApp.Servicos {
    public class TokenServico {
        //public static string GenerateToken(User User) {
        //    var tokenHandler = new JwtSecurityTokenHandler();
        //    var key = Encoding.ASCII.GetBytes(Settings.Secret);
        //    var tokenDescriptor = new SecurityTokenDescriptor {

        //        Subject = new ClaimsIdentity(new Claim[] {
        //            new Claim(ClaimTypes.Name, User.Username.ToString()),
        //            new Claim(ClaimTypes.Role, User.Role.ToString()),
        //        }),
        //        Expires = DateTime.UtcNow.AddHours(2),
        //        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)

        //    };
        //    var token = tokenHandler.CreateToken(tokenDescriptor);
        //    return tokenHandler.WriteToken(token);

        //}
    }
}
