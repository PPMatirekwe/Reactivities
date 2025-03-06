using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Persistence;

namespace Application.Activities.Commands
{
    public class DeleteActivity
    {
        public class Command : IRequest
        {
            public required string Id { get; set; }
        }
        public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
        {
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                 var activity = await context.Activities
                    .FindAsync([request.Id], cancellationToken)
                     ?? throw new ArgumentException("Cannot find activity");

                context.Remove(activity);
                await context.SaveChangesAsync(cancellationToken);    
            }
        }
    }
}