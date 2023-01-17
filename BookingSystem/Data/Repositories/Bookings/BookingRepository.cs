using BookingSystem.Data.Entities;
using System.ComponentModel.DataAnnotations;

namespace BookingSystem.Data.Repositories.Bookings
{
    public class BookingRepository : IBookingRepository
    {
        private DataContext _dataContext;
        public BookingRepository(DataContext dataContext) 
        {
            this._dataContext = dataContext;
        }

        public List<Booking> Get()
        {
            var bookings = _dataContext.Bookings.ToList();
            return bookings;
        }

        public bool IsInStock(int resourceId, DateTime DateFrom, DateTime DateTo, int BookedQuantity)
        {
            var totalBookedQuantityInRange = _dataContext.Bookings
                .Where(t => ((t.DateFrom <= DateFrom && DateFrom <= t.DateTo) || (t.DateFrom <= DateTo && DateTo <= t.DateTo)) && t.ResourceId == resourceId)
                .Sum(i => i.BookedQuantity);

            var resource = _dataContext.Resources.SingleOrDefault(r => r.Id == resourceId);
            if(resource == null) 
            {
                throw new KeyNotFoundException("Resource does not exist");
            }

            return resource.Quantity >= (totalBookedQuantityInRange + BookedQuantity);
        }

        public async void Post(Booking booking)
        {
            await _dataContext.Bookings.AddAsync(booking);
            await _dataContext.SaveChangesAsync();
            SendConfirmationEmail(booking.Id);
        }

        public void SendConfirmationEmail(int resourceId)
        {
            System.Diagnostics.Debug.WriteLine("Email sent to admin@admin.com for created booking with ID {0}", resourceId);
        }
    }
}
