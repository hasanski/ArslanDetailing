using System;
using MediatR;
using Persistence;

namespace Application.Parts.Commands;

public class DeletePart
{
    public class Command : IRequest
    {
        public required int PartID { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var part = await context.Parts.FindAsync([request.PartID ], cancellationToken)
            ??  throw new Exception("Part not found");

            context.Parts.Remove(part);
            await context.SaveChangesAsync(cancellationToken);
        }
    }
}
