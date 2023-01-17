using BookingSystem.Data.Entities;

namespace BookingSystem.Data
{
    public class ResourceSeeder
    {
        private readonly DataContext _context;
        public ResourceSeeder(DataContext dataContext)
        {
            this._context = dataContext;
        }

        public void Seed()
        {
            if (!_context.Resources.Any())
            {
                var resources = new List<Resource>()
                {
                    new Resource()
                    {
                        Name = "Resource 1",
                        Quantity = 10
                    },
                    new Resource()
                    {
                        Name = "Resource 2",
                        Quantity = 3
                    },
                    new Resource()
                    {
                        Name = "Resource 3",
                        Quantity = 14
                    },
                    new Resource()
                    {
                        Name = "Resource 4",
                        Quantity = 1
                    },
                    new Resource()
                    {
                        Name = "Resource 5",
                        Quantity = 19
                    },
                };

                _context.Resources.AddRange(resources);
                _context.SaveChanges();
            }
        }
    }
}
