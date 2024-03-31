using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using backend.Context;
using backend.Dtos.Job;
using backend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        private ApplicationDbContext _context { get; }
        private IMapper _mapper { get; }
        public JobController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // CRUD Operations

        // Create
        [HttpPost("Create")]
        public async Task<IActionResult> CreateJob([FromBody] JobCreateDto dto)
        {
            var newJob = _mapper.Map<Job>(dto);
            await _context.Jobs.AddAsync(newJob);
            await _context.SaveChangesAsync();

            if(newJob == null)
            {
                return BadRequest("Job creation failed");
            }

            return Ok("Job created successfully");
        }

        // Read
        [HttpGet("Get")]
        public async Task<ActionResult<IEnumerable<JobGetDto>>> GetJobs()
        {
            var jobs = await _context.Jobs.Include(job => job.Company).OrderByDescending(q => q.CreatedAt).ToListAsync();
            var convertedJobs = _mapper.Map<IEnumerable<JobGetDto>>(jobs);

            if(convertedJobs == null)
            {
                return NotFound("No jobs found");
            }

            return Ok(convertedJobs);
        }
    }
}