using BookingSystem.Data;
using BookingSystem.Data.Middlewares;
using BookingSystem.Data.Repositories.Bookings;
using BookingSystem.Data.Repositories.Resources;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DataContext>(options => options.UseSqlite(builder.Configuration.GetConnectionString("BookingSystemConnection")));
builder.Services.AddTransient<ResourceSeeder>();
builder.Services.AddScoped<IResourceRepository, ResourceRepository>();
builder.Services.AddScoped<IBookingRepository, BookingRepository>();

builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

var app = builder.Build();
app.UseMiddleware<ErrorHandlerMiddleware>();

if (args.Length > 0 && args[0].ToLower() == "resourceseed")
{
    SeedResources(app);
}

void SeedResources(IHost app)
{
    var scopedFactory = app.Services.GetService<IServiceScopeFactory>();

    using (var scope = scopedFactory.CreateScope())
    {
        var service = scope.ServiceProvider.GetService<ResourceSeeder>();
        service.Seed();
    }
}


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("corsapp");

app.UseAuthorization();

app.MapControllers();

app.Run();
