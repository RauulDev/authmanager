using AuthManager.Entities;
using AuthManager.Logic.Contracts;
using AuthManagerApp.Data.Models;
using AuthManagerApp.Handlers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AuthManagerApp.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class UsersController : Controller
    {
        private readonly IUserManager _usersManager;
        private readonly IRolePermissionsManager _rolePermissionsManager;

        public UsersController(IUserManager usersManager, IRolePermissionsManager rolePermissionsManager)
        {
            _usersManager = usersManager;
            _rolePermissionsManager = rolePermissionsManager;
        }

        [HttpGet]
        [HasPermission(PermissionsEnum.ListUsers)]

        public async Task<ActionResult<object>> GetUsers()
        {
            var users = await _usersManager.GetAll();
            return Ok(users);
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUserDetails(int id)
        {
            return Ok(await _usersManager.Get(id));
        }

        [HttpGet("me")]
        public async Task<ActionResult<User>> GetCurrentUser()
        {
            int id = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Name).Value);
            return Ok(await _usersManager.Get(id));
        }

        [HttpGet("permissions")]
        public async Task<ActionResult<User>> GetCurrentUserPermissions()
        {
            int id = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Name).Value);
            int idRole = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Role).Value);
            var permissions = _rolePermissionsManager.GetPermissionsByRole(idRole);
            return Ok(permissions);
        }

        [HttpPost]
        [HasPermission(PermissionsEnum.CreateUsers)]
        public async Task<ActionResult<User>> AddUser([FromBody] User user)
        {
            return Ok(await _usersManager.Add(user));
        }

        [HttpDelete("{id}")]
        [HasPermission(PermissionsEnum.DeleteUsers)]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            return Ok(await _usersManager.Delete(id));
        }

        [HttpPut()]
        [HasPermission(PermissionsEnum.EditUsers)]
        public async Task<ActionResult<User>> UpdateUser([FromBody] UserDTO user)
        {
            return Ok(await _usersManager.Update(user));
        }

    }
}
