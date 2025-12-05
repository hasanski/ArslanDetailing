using System;
using System.ComponentModel.DataAnnotations;
using Domain;
using MediatR;
using Persistence;

namespace Application.Queries;

public class GetPartsById
{
    public class Query : IRequest<Part>
    {
        public required int Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Part>
    {
        public async Task<Part> Handle(Query request, CancellationToken cancellationToken)
        {
            var part = await context.Parts.FindAsync([request.Id], cancellationToken);

            if (part == null)
            {
                throw new Exception("Part not found");
            }

            return part;
        }
    }
}
