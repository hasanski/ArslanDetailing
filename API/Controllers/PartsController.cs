using System;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class PartsController(AppDbContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Part>>> GetParts()
    {
        return await context.Parts.ToListAsync();     
    }
    [HttpGet("{Id}")]
    public async Task<ActionResult<Part>> GetPartsById(int Id)
    {
        //return await context.Parts.Where(p => p.PartID == Id).ToListAsync();
        var parts = await context.Parts.FindAsync(Id);
        
        if (parts == null) return NotFound();
        return parts; 
    }
}
  