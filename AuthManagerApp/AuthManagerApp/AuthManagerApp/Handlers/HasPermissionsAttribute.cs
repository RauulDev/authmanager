using AuthManager.Entities;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthManagerApp.Handlers
{
    public class HasPermissionAttribute : ActionFilterAttribute
    {
        private PermissionsEnum _permission;

        public HasPermissionAttribute(PermissionsEnum permission)
        {
            _permission = permission;
        }

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var ff = filterContext;
            //if (!CHECK_IF_USER_OR_ROLE_HAS_PERMISSION(_permission))
            //{
            //    // If this user does not have the required permission then redirect to login page
            //    var url = new UrlHelper(filterContext.RequestContext);
            //    var loginUrl = url.Content("/Account/Login");
            //    filterContext.HttpContext.Response.Redirect(loginUrl, true);
            //}
        }
    }
}
