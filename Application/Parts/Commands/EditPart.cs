using System;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Parts.Commands;

public class EditPart
{
public class Command : IRequest
    {
        public required Part Part { get; set; }
    }

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var part = await context.Parts.FindAsync(new object?[] { request.Part.PartID }, cancellationToken)
            ??  throw new Exception("Part not found");
          

            mapper.Map(request.Part, part);
            
            await context.SaveChangesAsync(cancellationToken);
     
        }
    }
}
