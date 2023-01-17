using BookingSystem.Data.Entities;

namespace BookingSystem.Data.Repositories.Bookings
{
    public interface IBookingRepository
    {
        List<Booking> Get();
        void Post(Booking booking);
        bool IsInStock(int resourceId, DateTime DateFrom, DateTime DateTo, int BookedQuantity);
        void SendConfirmationEmail(int resourceId);
    }
}
