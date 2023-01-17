using System.ComponentModel.DataAnnotations;

namespace BookingSystem.Data.Entities
{
    public class Resource
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        [Required]
        public int Quantity { get; set; }
    }
}
