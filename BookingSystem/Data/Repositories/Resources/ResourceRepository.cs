using BookingSystem.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookingSystem.Data.Repositories.Resources
{
    public class ResourceRepository : IResourceRepository
    {
        private DataContext _dataContext;
        public ResourceRepository(DataContext dataContext) 
        {
            this._dataContext = dataContext; 
        }

        public List<Resource> Get()
        {
            var resources = _dataContext.Resources.ToList();
            return resources;
        }

        public async void Post(Resource resource)
        {
            if(resource == null)
            {
                throw new ArgumentNullException(nameof(resource));
            }

            await _dataContext.Resources.AddAsync(resource);
            await _dataContext.SaveChangesAsync();
        }

    }
}
