using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using BookingSystem.Data;
using BookingSystem.Data.Entities;
using BookingSystem.Data.Repositories.Resources;
using Microsoft.AspNetCore.Mvc;

namespace BookingSystem.Controllers
{
    [Route("api/resource")]
    [ApiController]
    public class ResourceController : ControllerBase
    {
        private readonly IResourceRepository _repo;
        public ResourceController(IResourceRepository repo) 
        {
            _repo = repo;
        }

        // GET: api/resource
        [HttpGet]
        public IActionResult GetResources()
        {
            var resources = _repo.Get();
            return Ok(ApiResponse<List<Resource>>.Success(resources));
        }

        // POST: api/resource/create
        [Route("create")]
        [HttpPost]
        public async Task<IActionResult> CreateResource([FromBody] Resource resource)
        {
            _repo.Post(resource);
            return Ok(ApiResponse<string>.Success("Success"));
        }

    }
}
