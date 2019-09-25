﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspnetCoreSPATemplate.Models;
using AspnetCoreSPATemplate.Services.Common;
using AspnetCoreSPATemplate.Utils;
using Microsoft.AspNetCore.Mvc;

namespace AspnetCoreSPATemplate.Services
{
    public class AuthenticationLoginResponse : ResponseBase
    {
        public AuthenticationLoginResponse()
            : base()
        {

        }

        public string Token { get; set; }

        //public ApplicationUser User { get; set; }

    }
}
