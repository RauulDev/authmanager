using AuthManagerApp.Data.Contracts;
using AuthManagerApp.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthManagerApp.Data.Providers
{
    public class RolePermissionsData : IRolePermissionsData
    {
        private readonly AuthManagerContext _context;

        public RolePermissionsData(AuthManagerContext context)
        {
            _context = context;
        }
        public List<Permission> GetPermissionsByRole(int idRole)
        {
            var permissions = _context.RolePermissions.Where(rp => rp.IdRole == idRole).Select(s => s.IdPermissionNavigation);
            return  permissions.ToList();
        }

        public List<Role> GetRoles()
        {
            return _context.Roles.ToList();
        }
    }
}
