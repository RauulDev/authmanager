using AuthManager.Logic.Contracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthManagerApp.Controllers
{
    [Authorize]
    public class RolePermissionController : Controller
    {
        private readonly IRolePermissionsManager _rolePermissionsManager;

        public RolePermissionController(IRolePermissionsManager rolePermissionsManager)
        {
            _rolePermissionsManager = rolePermissionsManager;
        }

        [HttpGet]
        [Route("api/roles")]
        public async Task<ActionResult<object>> GetAvailableRoles()
        {
            var roles = _rolePermissionsManager.GetRoles();
            return Ok(roles);
        }
    }
}
