using BookingSystem.Data.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BookingSystem.Data.Repositories.Resources
{
    public interface IResourceRepository
    {
        List<Resource> Get();
        void Post(Resource resource);
    }
}
