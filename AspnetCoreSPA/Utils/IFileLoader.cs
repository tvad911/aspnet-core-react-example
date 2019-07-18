﻿using AspnetCoreSPATemplate.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspnetCoreSPATemplate.Utils
{
    public interface IFileLoader
    {
        Task<string> LoadFile();
    }
}