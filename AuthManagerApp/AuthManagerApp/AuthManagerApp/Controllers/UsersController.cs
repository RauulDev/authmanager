using AuthManager.Entities;
using AuthManager.Logic.Contracts;
using AuthManagerApp.Data.Models;
using AuthManagerApp.Handlers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace AuthManagerApp.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class UsersController : Controller
    {
        private readonly IUserManager _usersManager;

        public UsersController(IUserManager usersManager)
        {
            _usersManager = usersManager;
        }

        [HttpGet]
        [HasPermission(PermissionsEnum.ListUsers)]
        public async Task<ActionResult<object>> GetUsers()
        {
            return Ok(await _usersManager.GetAll());
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUserDetails(int id)
        {
            return Ok(await _usersManager.Get(id));
        }

        [HttpPost]
        public async Task<ActionResult<User>> AddUser([FromBody] User user)
        {
            return Ok(await _usersManager.Add(user));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            return Ok(await _usersManager.Delete(id));
        }

    }
}
