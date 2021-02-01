using AuthManager.Logic.Contracts;
using AuthManagerApp.Data.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthManagerApp.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IAuthManagerLogic _authManager;

        public AuthController(IAuthManagerLogic authManager)
        {
            _authManager = authManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login([FromBody] User user)
        {
            var loginResult = await _authManager.Login(user);
            if(loginResult == null)
            {
                return Unauthorized();
            }
            return Ok(loginResult);
        }
    }
}
