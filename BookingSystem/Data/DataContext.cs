using BookingSystem.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace BookingSystem.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Resource> Resources => Set<Resource>();
        public DbSet<Booking> Bookings => Set<Booking>();
    }
}
