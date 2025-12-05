using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Queries;

public class GetPartList
{
    public class Query : IRequest<List<Part>>{}
    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Part>>
    {
        public async Task<List<Part>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await context.Parts.ToListAsync(cancellationToken);
        }
    }

}
