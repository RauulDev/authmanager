using AuthManagerApp.Data.Contracts;
using AuthManagerApp.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthManagerApp.Data.Providers
{
    public class RolePermissions : IRolePermissions
    {
        private readonly AuthManagerContext _context;

        public RolePermissions(AuthManagerContext context)
        {
            _context = context;
        }
        public async Task<List<Permission>> GetPermissionsByRole(int idRole)
        {
            var permissions = _context.RolePermissions.Where(rp => rp.IdRole == idRole).Select(s => s.IdPermissionNavigation);
            return await permissions.ToListAsync();
        }
    }
}
