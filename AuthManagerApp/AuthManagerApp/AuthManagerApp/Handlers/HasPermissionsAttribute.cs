using AuthManager.Entities;
using AuthManager.Logic.Contracts;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Microsoft.AspNetCore.Mvc;

namespace AuthManagerApp.Handlers
{
    public class HasPermissionAttribute : ActionFilterAttribute
    {
        private PermissionsEnum _permission;

        public HasPermissionAttribute(PermissionsEnum permissions)
        {
            //_permission = permission;
            _permission = permissions;
        }

        public  override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            

            var service = filterContext.HttpContext.RequestServices.GetService<IRolePermissionsManager>();
            int idRole = Convert.ToInt32(filterContext.HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Role).Value);
            var permissions = service.GetPermissionsByRole(idRole);
            if (!permissions.Any(p => p.Name == _permission.ToString()))
            {
                filterContext.Result = new UnauthorizedObjectResult("user is unauthorized");
                return;
            }
            else
            {
                base.OnActionExecuting(filterContext);
            }
        }
    }
}
