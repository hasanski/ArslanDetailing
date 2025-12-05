using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Parts.Commands;

public class CreatePart
{
    public class Command : IRequest<int>
    {
        public required Part Part { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command, int>
    {
        public async Task<int> Handle(Command request, CancellationToken cancellationToken)
        {
            context.Parts.Add(request.Part);
            await context.SaveChangesAsync(cancellationToken);
            return request.Part.PartID;
        }
    }
}
