
using Application.Parts.Commands;
using Application.Queries;
using Domain;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers;

public class PartsController : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Part>>> GetParts()
    {
        return await Mediator.Send(new GetPartList.Query());
    }
    [HttpGet("{Id}")]
    public async Task<ActionResult<Part>> GetPartsById(int Id)
    {
        return await Mediator.Send(new GetPartsById.Query{Id = Id});
        //return await context.Parts.Where(p => p.PartID == Id).ToListAsync();
        // var parts = await context.Parts.FindAsync(Id);
        
        // if (parts == null) return NotFound();
        // return parts; 
    }

    [HttpPost]
    public async Task<ActionResult<int>> CreatePart(Part part)
    {
        return await Mediator.Send(new CreatePart.Command{Part = part});
    }
    [HttpPut]
    public async Task<IActionResult> EditPart(Part part)
    {
        await Mediator.Send(new EditPart.Command{Part = part});
        return NoContent();
    }
    [HttpDelete("{Id}")]
    public async Task<IActionResult> DeletePart(int Id)
    {
        await Mediator.Send(new DeletePart.Command{PartID = Id});
        return Ok();
    }
}
  