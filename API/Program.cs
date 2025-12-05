using Application.Core;
using Application.Queries;
using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddCors();
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<GetPartList.Handler>());
builder.Services.AddAutoMapper(typeof(MappingProfiles).Assembly);
var app = builder.Build();

// Configure the HTTP request pipeline.


app.UseCors(policy => policy
    .AllowAnyHeader()
    .AllowAnyMethod()
    .WithOrigins("http://localhost:3000","https://localhost:3000"));
app.MapControllers();
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
try
{
    var context = services.GetRequiredService<AppDbContext>();
          //  await context.Database.EnsureCreatedAsync();

     context.Database.Migrate();
    await DbInitializer.SeedDataAsync(context);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occurred while migrating or seeding the database.");
}
app.Run();
