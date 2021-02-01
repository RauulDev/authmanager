using AuthManager.Entities;
using AuthManager.Logic.Contracts;
using AuthManagerApp.Data.Contracts;
using AuthManagerApp.Data.Models;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace AuthManager.Logic.Providers
{
    public class AuthManagerLogic : IAuthManagerLogic
    {
        private readonly IUserManagerData _userManagerData;
        private readonly JWTSettings _jwtsettings;

        public AuthManagerLogic(IUserManagerData userManagerData, IOptions<JWTSettings> jwtsettings)
        {
            _userManagerData = userManagerData;
            _jwtsettings = jwtsettings.Value;
        }
        public async Task<Token> Login(User userLogin)
        {
            var user = await _userManagerData.Get(userLogin.LoginName, userLogin.Password);
            
            if (user == null)
            {
                return null;
            }
            return GenerateAccessToken(user);
        }

        private Token GenerateAccessToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_jwtsettings.SecretKey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, Convert.ToString(user.Id)),
                    new Claim(ClaimTypes.Role, Convert.ToString(user.Role))
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            string strToken = tokenHandler.WriteToken(token);
            return new Token { AccessToken = strToken, ExpirationTime = 3600 };
        }
    }
}
