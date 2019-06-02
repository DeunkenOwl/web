using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Task6.Controllers
{
    public class hjkController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}