using System.ComponentModel.DataAnnotations;

namespace BookStore.Models
{
    public class BookModel
    {
        public int Id { get; set; }
        
        //[Required]      // Default message: "The Title field is required."
        [Required(ErrorMessage = "Please add Title property.")]
        public string Title { get; set; }
        
        [MinLength(5)]
        [MaxLength(20)]
        public string Description { get; set; }
    }
}
