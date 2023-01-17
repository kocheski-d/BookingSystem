using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using BookingSystem.Data;
using BookingSystem.Data.Entities;
using BookingSystem.Data.Repositories.Bookings;
using BookingSystem.Data.Repositories.Resources;
using Microsoft.AspNetCore.Mvc;

namespace BookingSystem.Controllers
{
    [Route("api/booking")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBookingRepository _repo;
        public BookingController(IBookingRepository repo)
        {
            _repo = repo;
        }

        // POST: api/booking/create
        [Route("create")]
        [HttpPost]
        public async Task<IActionResult> CreateBooking([FromBody] Booking booking)
        {
            if (!_repo.IsInStock(booking.ResourceId, booking.DateFrom, booking.DateTo, booking.BookedQuantity))
            {
                throw new ValidationException("Current resource is out of stock for selected date range");
            }
            else
            {
                _repo.Post(booking);
                return Ok(ApiResponse<string>.Success("Success"));
            }
        }

    }
}
