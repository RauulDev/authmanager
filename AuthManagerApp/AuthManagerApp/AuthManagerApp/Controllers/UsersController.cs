using AuthManager.Logic.Contracts;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthManagerApp.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly IUserManager _usersManager;

        public UsersController(IUserManager usersManager)
        {
            _usersManager = usersManager;
        }


        //[HttpPost("Login")]
        //public async Task<ActionResult<UserWithToken>> Login([FromBody] User user)
        //{
        //    var log = _usersManager.Login("remolina7@gmail.com", "");
        //    return Ok();
        //}

        [HttpGet("GetUser")]
        public async Task<ActionResult<object>> GetUserDetails()
        {
            var log = _usersManager.Login("remolina7@gmail.com", "");
            return Ok();
        }

    }
}
