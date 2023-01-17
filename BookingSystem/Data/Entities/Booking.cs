using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace BookingSystem.Data.Entities
{
    public class Booking
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Date From is required")]
        [DataType(DataType.Date)]
        [Column(TypeName = "Date")]
        public DateTime DateFrom { get; set; }

        [Required(ErrorMessage = "Date To is required")]
        [DataType(DataType.Date)]
        [Column(TypeName = "Date")]
        public DateTime DateTo { get; set; }

        [Required(ErrorMessage = "Booked Quantity is required")]
        public int BookedQuantity { get; set; }

        [Required]
        public int ResourceId { get; set; }

    }
}
